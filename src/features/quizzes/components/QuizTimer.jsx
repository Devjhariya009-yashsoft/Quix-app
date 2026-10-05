/**
 * src/features/quizzes/components/QuizTimer.jsx
 */

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { radius } from '../../../theme/radius';
import { spacing } from '../../../theme/spacing';
import { AppText } from '../../../components/common/AppText';

export const QuizTimer = ({
  initialSeconds = 3600,
  onTimeUp,
  isPaused = false,
}) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (isPaused || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          if (onTimeUp) onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, isPaused]);

  const minutes = Math.floor(secondsLeft / 60);
  const remainingSeconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

  const isWarning = secondsLeft <= 300 && secondsLeft > 60;
  const isCritical = secondsLeft <= 60;

  const getBgColor = () => {
    if (isCritical) return colors.status.errorBg;
    if (isWarning) return colors.status.warningBg;
    return colors.pastel.yellow;
  };

  const getTextColor = () => {
    if (isCritical) return colors.status.error;
    if (isWarning) return colors.status.warning;
    return colors.dark.primary;
  };

  return (
    <View style={[styles.timerPill, { backgroundColor: getBgColor() }]}>
      <Ionicons name="time" size={16} color={getTextColor()} />
      <AppText variant="buttonSmall" bold color={getTextColor()} style={styles.timeText}>
        {formattedTime}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  timeText: {
    marginLeft: 6,
    letterSpacing: 0.5,
  },
});

export default QuizTimer;
