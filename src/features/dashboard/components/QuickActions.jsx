/**
 * src/features/dashboard/components/QuickActions.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { AppText } from '../../../components/common/AppText';

export const QuickActions = ({
  onStartQuiz,
  onLeaderboard,
  onResults,
  onPerformance,
}) => {
  const actions = [
    {
      title: 'Practice Test',
      icon: 'pencil',
      bg: colors.pastel.lavender,
      onPress: onStartQuiz,
    },
    {
      title: 'Leaderboard',
      icon: 'trophy',
      bg: colors.pastel.yellow,
      onPress: onLeaderboard,
    },
    {
      title: 'Past Results',
      icon: 'stats-chart',
      bg: colors.pastel.mint,
      onPress: onResults,
    },
    {
      title: 'Analytics',
      icon: 'pie-chart',
      bg: colors.pastel.peach,
      onPress: onPerformance,
    },
  ];

  return (
    <View style={styles.container}>
      <AppText variant="h4" color={colors.text.primary} style={styles.sectionHeading}>
        Quick Actions
      </AppText>
      <View style={styles.grid}>
        {actions.map((act, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.85}
            onPress={act.onPress}
            style={styles.actionItem}
          >
            <View style={[styles.iconWrap, { backgroundColor: act.bg }]}>
              <Ionicons name={act.icon} size={22} color={colors.dark.primary} />
            </View>
            <AppText variant="caption" bold color={colors.text.primary} style={styles.label}>
              {act.title}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    marginVertical: spacing.md,
  },
  sectionHeading: {
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconWrap: {
    width: 54,
    height: 54,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  label: {
    textAlign: 'center',
  },
});

export default QuickActions;
