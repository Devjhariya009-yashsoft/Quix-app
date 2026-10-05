/**
 * src/features/dashboard/screens/DashboardScreen.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { ScreenContainer } from '../../../components/layout/ScreenContainer';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { AppText } from '../../../components/common/AppText';
import { WelcomeHeader } from '../components/WelcomeHeader';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { StatsCard } from '../components/StatsCard';
import { UpcomingQuizCard } from '../components/UpcomingQuizCard';
import { QuickActions } from '../components/QuickActions';

export const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleStartFeatured = () => {
    navigation.navigate('QuizDetails', { quizId: 101, title: 'SSC CGL All-India Live Mock 01' });
  };

  return (
    <SafeAreaWrapper>
      <ScreenContainer scrollable>
        {/* Student Greeting & Notifications */}
        <WelcomeHeader
          studentName="Jacob"
          unreadCount={2}
          onNotificationPress={() => navigation.navigate('Notifications')}
        />

        {/* Active Subscription / Upgrade Card */}
        <SubscriptionCard
          isActive={true}
          planName="Premium Full-Year Pass"
          daysRemaining={184}
          onPress={() => navigation.navigate('SubscriptionPlans')}
        />

        {/* Quick Numbers Stats */}
        <StatsCard
          availableQuizzes={52}
          attemptedQuizzes={18}
          currentRank="#12"
          onPressQuizzes={() => navigation.navigate('QuizzesTab')}
          onPressAttempted={() => navigation.navigate('QuizzesTab')}
          onPressRank={() => navigation.navigate('LeaderboardTab')}
        />

        {/* Featured Live Mock Test */}
        <UpcomingQuizCard
          title="SSC CGL All-India Live Mock 01"
          category="Staff Selection Commission • Combined Graduate Level"
          questionsCount={100}
          durationMinutes={60}
          totalMarks={200}
          onStartPress={handleStartFeatured}
          onDetailsPress={handleStartFeatured}
        />

        {/* Quick Actions (Practice, Leaderboard, Results, Analytics) */}
        <QuickActions
          onStartQuiz={() => navigation.navigate('QuizzesTab')}
          onLeaderboard={() => navigation.navigate('LeaderboardTab')}
          onResults={() => navigation.navigate('ResultSummary', { attemptId: 501, quizId: 101 })}
          onPerformance={() => navigation.navigate('Performance')}
        />

        {/* Recent Performance Progress Preview */}
        <View style={styles.recentPerformanceCard}>
          <View style={styles.recentHeader}>
            <View>
              <AppText variant="caption" color={colors.text.secondary}>
                LATEST COMPLETED TEST
              </AppText>
              <AppText variant="h4" color={colors.text.primary}>
                Reasoning Ability Mock 04
              </AppText>
            </View>
            <View style={styles.scorePill}>
              <AppText variant="caption" bold color={colors.status.success}>
                85% PASS
              </AppText>
            </View>
          </View>

          <View style={styles.progressRow}>
            <View style={styles.scoreItem}>
              <AppText variant="caption" color={colors.text.secondary}>
                Score
              </AppText>
              <AppText variant="bodyLarge" bold color={colors.text.primary}>
                42.5 / 50
              </AppText>
            </View>
            <View style={styles.scoreItem}>
              <AppText variant="caption" color={colors.text.secondary}>
                Accuracy
              </AppText>
              <AppText variant="bodyLarge" bold color={colors.text.primary}>
                91.2%
              </AppText>
            </View>
            <View style={styles.scoreItem}>
              <AppText variant="caption" color={colors.text.secondary}>
                Time Taken
              </AppText>
              <AppText variant="bodyLarge" bold color={colors.text.primary}>
                24m 12s
              </AppText>
            </View>
          </View>

          <TouchableOpacity
            style={styles.reviewBtn}
            onPress={() => navigation.navigate('QuestionReview', { attemptId: 501 })}
          >
            <AppText variant="buttonSmall" color={colors.dark.primary}>
              View Detailed Solutions & Answers
            </AppText>
            <Ionicons name="arrow-forward" size={14} color={colors.dark.primary} />
          </TouchableOpacity>
        </View>
      </ScreenContainer>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  recentPerformanceCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  scorePill: {
    backgroundColor: colors.status.successBg,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border.light,
  },
  scoreItem: {
    alignItems: 'center',
  },
  reviewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: spacing.md,
  },
});

export default DashboardScreen;
