/**
 * src/features/quizzes/components/QuestionOption.jsx
 */

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { radius } from '../../../theme/radius';
import { spacing } from '../../../theme/spacing';
import { AppText } from '../../../components/common/AppText';

export const QuestionOption = ({
  option,
  isSelected,
  onSelect,
  currentLanguage = 'en',
}) => {
  const displayText = currentLanguage === 'hi' && option?.textHi ? option.textHi : option?.textEn;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onSelect}
      style={[
        styles.optionCard,
        isSelected && styles.optionCardSelected,
      ]}
    >
      {/* Option Key Badge (A, B, C, D) */}
      <View style={[styles.keyBadge, isSelected && styles.keyBadgeSelected]}>
        <AppText
          variant="buttonSmall"
          bold
          color={isSelected ? '#FFFFFF' : colors.dark.primary}
        >
          {option?.optionKey}
        </AppText>
      </View>

      {/* Option Text */}
      <View style={styles.textWrap}>
        <AppText
          variant="bodyMedium"
          bold={isSelected}
          color={colors.text.primary}
          style={styles.optionText}
        >
          {displayText}
        </AppText>
      </View>

      {/* Checkmark or Radio circle */}
      <View style={[styles.checkCircle, isSelected && styles.checkCircleSelected]}>
        {isSelected && <Ionicons name="checkmark" size={14} color="#FFFFFF" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.surface,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.xs,
  },
  optionCardSelected: {
    borderColor: colors.dark.primary,
    backgroundColor: colors.pastel.lavenderLight,
  },
  keyBadge: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    backgroundColor: colors.background.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  keyBadgeSelected: {
    backgroundColor: colors.dark.primary,
  },
  textWrap: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  optionText: {
    lineHeight: 22,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: radius.full,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleSelected: {
    borderColor: colors.dark.primary,
    backgroundColor: colors.dark.primary,
  },
});

export default QuestionOption;
