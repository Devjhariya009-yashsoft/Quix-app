/**
 * src/features/dashboard/components/UpcomingQuizCard.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { AppText } from '../../../components/common/AppText';
import { AppButton } from '../../../components/common/AppButton';

export const UpcomingQuizCard = ({
  title = 'SSC CGL All-India Live Mock 01',
  category = 'Staff Selection Commission • Combined Graduate Level',
  questionsCount = 100,
  durationMinutes = 60,
  totalMarks = 200,
  onStartPress,
  onDetailsPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Top Banner Tag */}
      <View style={styles.headerRow}>
        <View style={styles.tag}>
          <AppText variant="caption" bold color={colors.dark.primary}>
            🔥 LIVE MOCK TEST
          </AppText>
        </View>
        <TouchableOpacity onPress={onDetailsPress} style={styles.detailsBtn}>
          <AppText variant="caption" bold color={colors.text.secondary}>
            Rules & Info
          </AppText>
          <Ionicons name="information-circle-outline" size={14} color={colors.text.secondary} />
        </TouchableOpacity>
      </View>

      {/* Title & Category */}
      <AppText variant="h3" color={colors.text.primary} style={styles.title}>
        {title}
      </AppText>
      <AppText variant="bodySmall" color={colors.text.secondary} style={styles.category}>
        {category}
      </AppText>

      {/* Test Meta Info Chips */}
      <View style={styles.metaRow}>
        <View style={styles.metaChip}>
          <Ionicons name="help-circle-outline" size={15} color={colors.dark.primary} />
          <AppText variant="caption" bold color={colors.dark.primary} style={styles.metaText}>
            {questionsCount} Questions
          </AppText>
        </View>

        <View style={styles.metaChip}>
          <Ionicons name="time-outline" size={15} color={colors.dark.primary} />
          <AppText variant="caption" bold color={colors.dark.primary} style={styles.metaText}>
            {durationMinutes} Mins
          </AppText>
        </View>

        <View style={styles.metaChip}>
          <Ionicons name="ribbon-outline" size={15} color={colors.dark.primary} />
          <AppText variant="caption" bold color={colors.dark.primary} style={styles.metaText}>
            {totalMarks} Marks
          </AppText>
        </View>
      </View>

      {/* Start Button */}
      <View style={styles.actionWrap}>
        <AppButton
          title="Start Quiz Now"
          onPress={onStartPress}
          variant="primary"
          size="medium"
          rightIcon={<Ionicons name="play" size={14} color="#FFFFFF" />}
        />
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
    marginBottom: spacing.sm,
  },
  tag: {
    backgroundColor: colors.pastel.yellow,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
  },
  detailsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    marginBottom: spacing.xxs,
  },
  category: {
    marginBottom: spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.lg,
  },
  metaChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.pastel.lavenderLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.md,
  },
  metaText: {
    marginLeft: 4,
  },
  actionWrap: {
    width: '100%',
  },
});

export default UpcomingQuizCard;
