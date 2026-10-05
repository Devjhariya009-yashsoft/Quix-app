/**
 * src/features/quizzes/screens/QuizDetailsScreen.jsx
 */

import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { ScreenContainer } from '../../../components/layout/ScreenContainer';
import { AppHeader } from '../../../components/common/AppHeader';
import { AppText } from '../../../components/common/AppText';
import { AppButton } from '../../../components/common/AppButton';

export const QuizDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { quizId = 101, title = 'SSC CGL Tier-1 Full Mock 01' } = route.params || {};

  const handleStart = () => {
    navigation.replace('QuizAttempt', { quizId });
  };

  return (
    <SafeAreaWrapper>
      <AppHeader title="Test Overview" showBack onBackPress={() => navigation.goBack()} />

      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        {/* Hero Card */}
        <View style={styles.heroCard}>
          <View style={styles.badge}>
            <AppText variant="caption" bold color={colors.dark.primary}>
              ALL-INDIA TEST SERIES
            </AppText>
          </View>
          <AppText variant="h2" color={colors.text.primary} style={styles.quizTitle}>
            {title}
          </AppText>
          <AppText variant="bodySmall" color={colors.text.secondary}>
            Comprehensive full-length exam simulation created by top exam specialists.
          </AppText>
        </View>

        {/* 4 Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={[styles.statBox, { backgroundColor: colors.pastel.lavender }]}>
            <AppText variant="caption" color={colors.text.secondary}>
              Questions
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              100
            </AppText>
          </View>

          <View style={[styles.statBox, { backgroundColor: colors.pastel.yellow }]}>
            <AppText variant="caption" color={colors.text.secondary}>
              Duration
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              60m
            </AppText>
          </View>

          <View style={[styles.statBox, { backgroundColor: colors.pastel.mint }]}>
            <AppText variant="caption" color={colors.text.secondary}>
              Total Marks
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              200
            </AppText>
          </View>

          <View style={[styles.statBox, { backgroundColor: colors.pastel.peach }]}>
            <AppText variant="caption" color={colors.text.secondary}>
              Passing Marks
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              80
            </AppText>
          </View>
        </View>

        {/* Section-Wise Structure (SRS requirement) */}
        <View style={styles.sectionCard}>
          <AppText variant="h4" color={colors.text.primary} style={styles.sectionHeading}>
            Section-Wise Distribution
          </AppText>

          <View style={styles.sectionRow}>
            <AppText variant="bodyMedium" bold color={colors.text.primary}>
              1. General Awareness
            </AppText>
            <AppText variant="bodyMedium" color={colors.text.secondary}>
              40 Qs • 80 Marks
            </AppText>
          </View>

          <View style={styles.sectionRow}>
            <AppText variant="bodyMedium" bold color={colors.text.primary}>
              2. Quantitative Aptitude
            </AppText>
            <AppText variant="bodyMedium" color={colors.text.secondary}>
              30 Qs • 60 Marks
            </AppText>
          </View>

          <View style={styles.sectionRow}>
            <AppText variant="bodyMedium" bold color={colors.text.primary}>
              3. General Intelligence & Reasoning
            </AppText>
            <AppText variant="bodyMedium" color={colors.text.secondary}>
              30 Qs • 60 Marks
            </AppText>
          </View>
        </View>

        {/* Rules & Negative Marking */}
        <View style={styles.rulesCard}>
          <AppText variant="h4" color={colors.text.primary} style={styles.sectionHeading}>
            Important Instructions
          </AppText>

          <View style={styles.ruleItem}>
            <Ionicons name="checkmark-circle" size={18} color={colors.status.success} />
            <AppText variant="bodySmall" color={colors.text.secondary} style={styles.ruleText}>
              Each correct answer awards <AppText variant="bodySmall" bold color={colors.dark.primary}>+2.0 Marks</AppText>.
            </AppText>
          </View>

          <View style={styles.ruleItem}>
            <Ionicons name="close-circle" size={18} color={colors.status.error} />
            <AppText variant="bodySmall" color={colors.text.secondary} style={styles.ruleText}>
              Negative marking: <AppText variant="bodySmall" bold color={colors.status.error}>-0.50 Marks</AppText> for incorrect answers.
            </AppText>
          </View>

          <View style={styles.ruleItem}>
            <Ionicons name="timer-outline" size={18} color={colors.dark.primary} />
            <AppText variant="bodySmall" color={colors.text.secondary} style={styles.ruleText}>
              Test will auto-submit when the countdown timer hits 00:00.
            </AppText>
          </View>
        </View>

        {/* Start Button */}
        <View style={styles.startBtnWrap}>
          <AppButton
            title="Start Mock Test Now"
            onPress={handleStart}
            variant="primary"
            size="large"
            rightIcon={<Ionicons name="play" size={16} color="#FFFFFF" />}
          />
        </View>
      </ScreenContainer>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
  },
  heroCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.soft,
    marginBottom: spacing.md,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.pastel.yellow,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
    marginBottom: spacing.xs,
  },
  quizTitle: {
    marginBottom: spacing.xs,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  statBox: {
    width: '48%',
    borderRadius: radius.xl,
    padding: spacing.md,
  },
  sectionCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
    marginBottom: spacing.md,
  },
  sectionHeading: {
    marginBottom: spacing.md,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderColor: colors.border.light,
  },
  rulesCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
    marginBottom: spacing.xl,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  ruleText: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  startBtnWrap: {
    marginBottom: spacing.xl,
  },
});

export default QuizDetailsScreen;
