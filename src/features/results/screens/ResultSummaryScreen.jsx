/**
 * src/features/results/screens/ResultSummaryScreen.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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

export const ResultSummaryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { attemptId = 902 } = route.params || {};

  return (
    <SafeAreaWrapper>
      <AppHeader
        title="Test Scorecard"
        showBack
        onBackPress={() => navigation.navigate('Main')}
      />

      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        {/* Hero Score Banner */}
        <View style={styles.scoreHeroCard}>
          <View style={styles.passBadge}>
            <Ionicons name="ribbon" size={16} color={colors.status.success} />
            <AppText variant="caption" bold color={colors.status.success} style={{ marginLeft: 4 }}>
              QUALIFIED / PASS
            </AppText>
          </View>

          <AppText variant="numberLarge" color={colors.dark.primary} style={styles.scoreText}>
            162.5{' '}
            <AppText variant="h3" color={colors.text.secondary}>
              / 200
            </AppText>
          </AppText>

          <AppText variant="bodyMedium" bold color={colors.text.brand}>
            81.25% Overall Percentage
          </AppText>

          {/* Rank highlight strip */}
          <View style={styles.rankStrip}>
            <View style={styles.rankItem}>
              <AppText variant="caption" color={colors.text.secondary}>
                All-India Rank
              </AppText>
              <AppText variant="h3" color={colors.dark.primary}>
                #14
              </AppText>
            </View>

            <View style={styles.divider} />

            <View style={styles.rankItem}>
              <AppText variant="caption" color={colors.text.secondary}>
                Percentile
              </AppText>
              <AppText variant="h3" color={colors.dark.primary}>
                98.4%
              </AppText>
            </View>

            <View style={styles.divider} />

            <View style={styles.rankItem}>
              <AppText variant="caption" color={colors.text.secondary}>
                Accuracy
              </AppText>
              <AppText variant="h3" color={colors.dark.primary}>
                83.8%
              </AppText>
            </View>
          </View>
        </View>

        {/* Detailed Breakdown Cards (SRS requirement) */}
        <View style={styles.breakdownGrid}>
          {/* Correct Answers */}
          <View style={[styles.statCard, { backgroundColor: colors.pastel.mint }]}>
            <View style={styles.statIcon}>
              <Ionicons name="checkmark-circle" size={24} color={colors.status.success} />
            </View>
            <AppText variant="caption" color={colors.text.secondary}>
              Correct
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              78
            </AppText>
          </View>

          {/* Incorrect Answers */}
          <View style={[styles.statCard, { backgroundColor: colors.pastel.peach }]}>
            <View style={styles.statIcon}>
              <Ionicons name="close-circle" size={24} color={colors.status.error} />
            </View>
            <AppText variant="caption" color={colors.text.secondary}>
              Incorrect
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              15
            </AppText>
          </View>

          {/* Unattempted */}
          <View style={[styles.statCard, { backgroundColor: colors.pastel.lavender }]}>
            <View style={styles.statIcon}>
              <Ionicons name="remove-circle" size={24} color={colors.text.secondary} />
            </View>
            <AppText variant="caption" color={colors.text.secondary}>
              Unattempted
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              7
            </AppText>
          </View>

          {/* Time Taken */}
          <View style={[styles.statCard, { backgroundColor: colors.pastel.yellow }]}>
            <View style={styles.statIcon}>
              <Ionicons name="time" size={24} color={colors.dark.primary} />
            </View>
            <AppText variant="caption" color={colors.text.secondary}>
              Time Taken
            </AppText>
            <AppText variant="numberMedium" color={colors.dark.primary}>
              52m
            </AppText>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsWrap}>
          <AppButton
            title="View Detailed Question Solutions"
            onPress={() => navigation.navigate('QuestionReview', { attemptId })}
            variant="primary"
            size="large"
            rightIcon={<Ionicons name="book-outline" size={18} color="#FFFFFF" />}
          />

          <View style={{ height: spacing.sm }} />

          <AppButton
            title="Return to Dashboard"
            onPress={() => navigation.navigate('Main')}
            variant="outline"
            size="medium"
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
  scoreHeroCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.soft,
    marginBottom: spacing.md,
  },
  passBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.status.successBg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
    marginBottom: spacing.sm,
  },
  scoreText: {
    marginVertical: spacing.xs,
  },
  rankStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: colors.background.secondary,
    borderRadius: radius.xl,
    paddingVertical: spacing.md,
    marginTop: spacing.lg,
  },
  rankItem: {
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: colors.border.light,
  },
  breakdownGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  statCard: {
    width: '48%',
    borderRadius: radius.xl,
    padding: spacing.md,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: spacing.xs,
  },
  actionsWrap: {
    marginTop: spacing.sm,
  },
});

export default ResultSummaryScreen;
