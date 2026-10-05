/**
 * src/features/quizzes/components/QuestionCard.jsx
 * Bilingual question card with 1-tap EN/HI switch
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { AppText } from '../../../components/common/AppText';

export const QuestionCard = ({
  question,
  questionNumber = 1,
  totalQuestions = 100,
  currentLanguage = 'en',
  onToggleLanguage,
  sectionName = 'General Intelligence',
}) => {
  const displayText = currentLanguage === 'hi' && question?.questionHi ? question.questionHi : question?.questionEn;

  return (
    <View style={styles.card}>
      {/* Top Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.leftMeta}>
          <View style={styles.qNumBadge}>
            <AppText variant="caption" bold color={colors.dark.primary}>
              Q. {questionNumber} / {totalQuestions}
            </AppText>
          </View>
          {sectionName && (
            <View style={styles.sectionBadge}>
              <AppText variant="caption" color={colors.text.secondary}>
                {sectionName}
              </AppText>
            </View>
          )}
        </View>

        {/* Bilingual Switch Pill */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onToggleLanguage}
          style={styles.langPill}
        >
          <View style={[styles.langHalf, currentLanguage === 'en' && styles.langHalfActive]}>
            <AppText variant="caption" bold color={currentLanguage === 'en' ? colors.dark.primary : colors.text.tertiary}>
              EN
            </AppText>
          </View>
          <View style={[styles.langHalf, currentLanguage === 'hi' && styles.langHalfActive]}>
            <AppText variant="caption" bold color={currentLanguage === 'hi' ? colors.dark.primary : colors.text.tertiary}>
              HI
            </AppText>
          </View>
        </TouchableOpacity>
      </View>

      {/* Marks Information Bar */}
      <View style={styles.marksRow}>
        <AppText variant="caption" color={colors.status.success} bold>
          +{question?.marks || 2} Marks
        </AppText>
        {question?.negativeMarks > 0 && (
          <AppText variant="caption" color={colors.status.error} bold>
            -{question.negativeMarks} Negative
          </AppText>
        )}
      </View>

      {/* Main Question Text */}
      <View style={styles.textContainer}>
        <AppText variant="bodyLarge" bold color={colors.text.primary} style={styles.questionText}>
          {displayText}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.soft,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  leftMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  qNumBadge: {
    backgroundColor: colors.pastel.lavender,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
  },
  sectionBadge: {
    backgroundColor: colors.background.secondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
  },
  langPill: {
    flexDirection: 'row',
    backgroundColor: colors.background.secondary,
    borderRadius: radius.full,
    padding: 2,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  langHalf: {
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  langHalfActive: {
    backgroundColor: colors.pastel.yellow,
  },
  marksRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  textContainer: {
    marginTop: spacing.xs,
  },
  questionText: {
    lineHeight: 26,
    fontSize: 17,
  },
});

export default QuestionCard;
