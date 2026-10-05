/**
 * src/features/dashboard/components/StatsCard.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { AppText } from '../../../components/common/AppText';

export const StatsCard = ({
  availableQuizzes = 48,
  attemptedQuizzes = 16,
  currentRank = '#14',
  onPressQuizzes,
  onPressAttempted,
  onPressRank,
}) => {
  return (
    <View style={styles.container}>
      {/* Card 1: Available Tests (Lavender) */}
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={onPressQuizzes}
        style={[styles.card, { backgroundColor: colors.pastel.lavender }]}
      >
        <View style={styles.topRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="school" size={18} color={colors.dark.primary} />
          </View>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-up-forward" size={14} color="#FFFFFF" />
          </View>
        </View>
        <AppText variant="caption" color={colors.text.secondary} style={styles.label}>
          Available
        </AppText>
        <AppText variant="numberMedium" color={colors.dark.primary}>
          {availableQuizzes}
        </AppText>
      </TouchableOpacity>

      {/* Card 2: Attempted Tests (Mint) */}
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={onPressAttempted}
        style={[styles.card, { backgroundColor: colors.pastel.mint }]}
      >
        <View style={styles.topRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark-done" size={18} color={colors.dark.primary} />
          </View>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-up-forward" size={14} color="#FFFFFF" />
          </View>
        </View>
        <AppText variant="caption" color={colors.text.secondary} style={styles.label}>
          Attempted
        </AppText>
        <AppText variant="numberMedium" color={colors.dark.primary}>
          {attemptedQuizzes}
        </AppText>
      </TouchableOpacity>

      {/* Card 3: Current Rank (Yellow) */}
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={onPressRank}
        style={[styles.card, { backgroundColor: colors.pastel.yellow }]}
      >
        <View style={styles.topRow}>
          <View style={styles.iconCircle}>
            <Ionicons name="trophy" size={18} color={colors.dark.primary} />
          </View>
          <View style={styles.arrowCircle}>
            <Ionicons name="arrow-up-forward" size={14} color="#FFFFFF" />
          </View>
        </View>
        <AppText variant="caption" color={colors.text.secondary} style={styles.label}>
          Leaderboard
        </AppText>
        <AppText variant="numberMedium" color={colors.dark.primary}>
          {currentRank}
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacing.xl,
    gap: spacing.sm,
    marginVertical: spacing.sm,
  },
  card: {
    flex: 1,
    borderRadius: radius.xl,
    padding: spacing.md,
    justifyContent: 'space-between',
    minHeight: 120,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: radius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowCircle: {
    width: 24,
    height: 24,
    borderRadius: radius.full,
    backgroundColor: colors.dark.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: '600',
    marginTop: spacing.xs,
  },
});

export default StatsCard;
