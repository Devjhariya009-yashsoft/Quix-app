/**
 * src/features/quizzes/components/QuestionNavigator.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { radius } from '../../../theme/radius';
import { spacing } from '../../../theme/spacing';
import { AppText } from '../../../components/common/AppText';
import { AppButton } from '../../../components/common/AppButton';

export const QuestionNavigator = ({
  visible,
  onClose,
  totalQuestions = 100,
  currentIndex = 0,
  onSelectQuestion,
  questionStatusMap = {},
  onSubmitPress,
}) => {
  const getStatusColor = (index) => {
    const status = questionStatusMap[index];
    if (status === 'answered') return colors.status.success;
    if (status === 'marked') return colors.status.review;
    return colors.border.light;
  };

  const getStatusTextColor = (index) => {
    const status = questionStatusMap[index];
    if (status === 'answered' || status === 'marked') return '#FFFFFF';
    return colors.text.primary;
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sheetContainer}>
          {/* Header */}
          <View style={styles.sheetHeader}>
            <View>
              <AppText variant="h3" color={colors.text.primary}>
                Question Palette
              </AppText>
              <AppText variant="caption" color={colors.text.secondary}>
                Tap any question number to jump directly
              </AppText>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color={colors.dark.primary} />
            </TouchableOpacity>
          </View>

          {/* Status Legend Pills */}
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.status.success }]} />
              <AppText variant="caption">Answered</AppText>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.status.review }]} />
              <AppText variant="caption">Marked</AppText>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.border.light }]} />
              <AppText variant="caption">Unattempted</AppText>
            </View>
          </View>

          {/* Question Number Circles Grid */}
          <ScrollView contentContainerStyle={styles.grid}>
            {Array(totalQuestions)
              .fill(0)
              .map((_, idx) => {
                const isCurrent = idx === currentIndex;
                return (
                  <TouchableOpacity
                    key={idx}
                    activeOpacity={0.8}
                    onPress={() => {
                      if (onSelectQuestion) onSelectQuestion(idx);
                      onClose();
                    }}
                    style={[
                      styles.qCircle,
                      { backgroundColor: getStatusColor(idx) },
                      isCurrent && styles.qCircleCurrent,
                    ]}
                  >
                    <AppText
                      variant="caption"
                      bold
                      color={getStatusTextColor(idx)}
                    >
                      {idx + 1}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>

          {/* Submit Test Button */}
          <View style={styles.submitWrap}>
            <AppButton
              title="Submit Quiz"
              onPress={() => {
                onClose();
                if (onSubmitPress) onSubmitPress();
              }}
              variant="primary"
              size="medium"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.background.overlay,
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: colors.background.surface,
    borderTopLeftRadius: radius.huge,
    borderTopRightRadius: radius.huge,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    maxHeight: '80%',
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.background.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.sm,
    backgroundColor: colors.background.secondary,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
    justifyContent: 'center',
  },
  qCircle: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qCircleCurrent: {
    borderWidth: 2.5,
    borderColor: colors.dark.primary,
  },
  submitWrap: {
    marginTop: spacing.md,
  },
});

export default QuestionNavigator;
