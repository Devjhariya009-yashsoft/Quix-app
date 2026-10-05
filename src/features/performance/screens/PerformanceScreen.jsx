import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, shadows } from '../../../theme';
import AppText from '../../../components/common/AppText';
import ScreenContainer from '../../../components/layout/ScreenContainer';
import AppHeader from '../../../components/common/AppHeader';

const SUBJECTS = [
  { name: 'General Studies', score: '82%', progress: 0.82, color: colors.pastel.lavender, barColor: '#7C3AED', status: 'Strong' },
  { name: 'Reasoning & Logic', score: '78%', progress: 0.78, color: colors.pastel.mint, barColor: '#10B981', status: 'Good' },
  { name: 'Quantitative Aptitude', score: '54%', progress: 0.54, color: colors.pastel.yellow, barColor: '#F59E0B', status: 'Needs Focus' },
  { name: 'English Comprehension', score: '88%', progress: 0.88, color: colors.pastel.sky, barColor: '#3B82F6', status: 'Excellent' },
];

const WEEKLY_DATA = [
  { day: 'M', height: 45 },
  { day: 'T', height: 70 },
  { day: 'W', height: 90 },
  { day: 'T', height: 60 },
  { day: 'F', height: 100 },
  { day: 'S', height: 80 },
  { day: 'S', height: 35 },
];

const PerformanceScreen = ({ navigation }) => {
  return (
    <ScreenContainer scrollable={false} backgroundColor={colors.background.primary}>
      <AppHeader
        title="Performance Analytics"
        showBack={false}
        rightIcon="download-outline"
        onRightPress={() => {}}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Hero Overall Stats Card */}
        <View style={styles.heroCard}>
          <View style={styles.heroTop}>
            <View>
              <AppText variant="caption" color={colors.text.inverseMuted}>Overall Accuracy</AppText>
              <AppText variant="h1" weight="bold" color={colors.text.inverse}>79.4%</AppText>
            </View>
            <View style={styles.percentileBadge}>
              <Ionicons name="trending-up" size={16} color="#10B981" />
              <AppText variant="caption" weight="bold" color="#10B981">+4.2% this week</AppText>
            </View>
          </View>

          <View style={styles.statsDivider} />

          <View style={styles.statsRow}>
            <View style={styles.miniStat}>
              <AppText variant="bodySmall" weight="bold" color={colors.text.inverse}>48</AppText>
              <AppText variant="caption" color={colors.text.inverseMuted}>Tests Taken</AppText>
            </View>
            <View style={styles.miniStat}>
              <AppText variant="bodySmall" weight="bold" color={colors.text.inverse}>42s</AppText>
              <AppText variant="caption" color={colors.text.inverseMuted}>Avg. Speed</AppText>
            </View>
            <View style={styles.miniStat}>
              <AppText variant="bodySmall" weight="bold" color={colors.text.inverse}>Top 12%</AppText>
              <AppText variant="caption" color={colors.text.inverseMuted}>Percentile</AppText>
            </View>
          </View>
        </View>

        {/* Weekly Activity Chart Card */}
        <View style={styles.sectionCard}>
          <View style={styles.cardHeaderRow}>
            <AppText variant="subtitle" weight="bold">Weekly Practice Trend</AppText>
            <AppText variant="caption" color={colors.text.tertiary}>Questions Solved</AppText>
          </View>

          <View style={styles.chartContainer}>
            {WEEKLY_DATA.map((item, index) => (
              <View key={index} style={styles.barCol}>
                <View style={styles.barTrack}>
                  <View
                    style={[
                      styles.barFill,
                      { height: `${item.height}%` },
                      item.height === 100 ? styles.maxBarFill : null,
                    ]}
                  />
                </View>
                <AppText variant="caption" weight="semiBold" color={colors.text.tertiary} style={{ marginTop: 6 }}>
                  {item.day}
                </AppText>
              </View>
            ))}
          </View>
        </View>

        {/* Subject-Wise Mastery */}
        <View style={styles.sectionCard}>
          <AppText variant="subtitle" weight="bold" style={{ marginBottom: spacing.md }}>
            Subject Mastery
          </AppText>

          {SUBJECTS.map((sub, i) => (
            <View key={i} style={styles.subjectRow}>
              <View style={styles.subjectTop}>
                <AppText variant="bodyMedium" weight="semiBold">{sub.name}</AppText>
                <View style={[styles.statusBadge, { backgroundColor: sub.color }]}>
                  <AppText variant="caption" weight="bold" color={colors.text.primary}>
                    {sub.score} • {sub.status}
                  </AppText>
                </View>
              </View>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressBar,
                    { width: `${sub.progress * 100}%`, backgroundColor: sub.barColor },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Weak Topic Callout Alert */}
        <View style={styles.alertCard}>
          <View style={styles.alertIconCircle}>
            <Ionicons name="bulb-outline" size={24} color="#D97706" />
          </View>
          <View style={styles.alertTextContent}>
            <AppText variant="bodyMedium" weight="bold" color="#92400E">Focus Area Recommended</AppText>
            <AppText variant="caption" color="#78350F" style={{ marginTop: 2 }}>
              Your accuracy in "Quantitative Aptitude - Time & Work" dropped to 48%. Practice a targeted 15-question quiz to boost it.
            </AppText>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 100,
  },
  heroCard: {
    backgroundColor: colors.dark.primary,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  percentileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
    gap: 4,
  },
  statsDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    marginVertical: spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  miniStat: {
    alignItems: 'center',
  },
  sectionCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.sm,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 120,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
  },
  barCol: {
    alignItems: 'center',
    width: 24,
    height: '100%',
    justifyContent: 'flex-end',
  },
  barTrack: {
    width: 14,
    height: 90,
    backgroundColor: '#F3F0FA',
    borderRadius: radius.full,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    backgroundColor: colors.pastel.lavenderDark,
    borderRadius: radius.full,
  },
  maxBarFill: {
    backgroundColor: colors.dark.primary,
  },
  subjectRow: {
    marginBottom: spacing.md,
  },
  subjectTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: radius.full,
  },
  progressTrack: {
    height: 8,
    backgroundColor: '#F3F0FA',
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: radius.full,
  },
  alertCard: {
    flexDirection: 'row',
    backgroundColor: colors.pastel.yellow,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: '#FCD34D',
    gap: spacing.md,
    ...shadows.sm,
  },
  alertIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertTextContent: {
    flex: 1,
  },
});

export default PerformanceScreen;
