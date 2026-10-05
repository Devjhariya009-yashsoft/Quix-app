/**
 * src/features/auth/screens/SplashScreen.jsx
 */

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { AppText } from '../../../components/common/AppText';
import { AppButton } from '../../../components/common/AppButton';

export const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaWrapper style={styles.container}>
      <View style={styles.content}>
        {/* Top Header Badge */}
        <View style={styles.topBadgeContainer}>
          <View style={styles.badgePill}>
            <AppText variant="caption" bold color={colors.dark.primary}>
              EXAM PREPARATION 2026
            </AppText>
          </View>
        </View>

        {/* Hero Title */}
        <View style={styles.heroTextContainer}>
          <AppText variant="h1" style={styles.heroTitle}>
            Prepare.{'\n'}
            <AppText variant="h1" style={styles.highlightText}>
              Compete & Achieve.
            </AppText>
          </AppText>
          <AppText variant="bodyLarge" color={colors.text.secondary} style={styles.heroSubtitle}>
            Smart mock tests, live rankings, and personalized analysis for competitive exams.
          </AppText>
        </View>

        {/* Featured Visual Illustration Card */}
        <View style={styles.heroCard}>
          <View style={styles.trophyCircle}>
            <Ionicons name="trophy" size={54} color={colors.dark.primary} />
          </View>
          <View style={styles.cardInfo}>
            <AppText variant="h3" color={colors.dark.primary}>
              Target Your Dream Rank
            </AppText>
            <AppText variant="bodySmall" color={colors.text.secondary} style={{ marginTop: 4 }}>
              Thousands of students practicing daily
            </AppText>
          </View>
          <View style={styles.pillStatsRow}>
            <View style={[styles.statPill, { backgroundColor: colors.pastel.lavender }]}>
              <AppText variant="caption" bold color={colors.dark.primary}>
                1000+ Tests
              </AppText>
            </View>
            <View style={[styles.statPill, { backgroundColor: colors.pastel.yellow }]}>
              <AppText variant="caption" bold color={colors.dark.primary}>
                Live Leaderboard
              </AppText>
            </View>
            <View style={[styles.statPill, { backgroundColor: colors.pastel.mint }]}>
              <AppText variant="caption" bold color={colors.dark.primary}>
                Hindi + English
              </AppText>
            </View>
          </View>
        </View>

        {/* Bottom CTA Actions */}
        <View style={styles.bottomActions}>
          <AppButton
            title="Get Started"
            onPress={() => navigation.navigate('Login')}
            variant="primary"
            size="large"
            rightIcon={<Ionicons name="arrow-forward" size={18} color="#FFFFFF" />}
          />
          <View style={styles.loginLinkWrap}>
            <AppText variant="bodySmall" color={colors.text.secondary}>
              Already have an account?{' '}
            </AppText>
            <AppText
              variant="bodySmall"
              bold
              color={colors.dark.primary}
              onPress={() => navigation.navigate('Login')}
            >
              Sign In
            </AppText>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
  },
  topBadgeContainer: {
    marginTop: spacing.sm,
  },
  badgePill: {
    alignSelf: 'flex-start',
    backgroundColor: colors.pastel.yellow,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  heroTextContainer: {
    marginTop: spacing.md,
  },
  heroTitle: {
    fontSize: 34,
    lineHeight: 42,
    color: colors.text.primary,
  },
  highlightText: {
    color: colors.text.brand,
    backgroundColor: colors.pastel.lavenderLight,
  },
  heroSubtitle: {
    marginTop: spacing.sm,
    lineHeight: 24,
  },
  heroCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.soft,
    marginVertical: spacing.lg,
  },
  trophyCircle: {
    width: 90,
    height: 90,
    borderRadius: radius.full,
    backgroundColor: colors.pastel.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  cardInfo: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  pillStatsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    justifyContent: 'center',
  },
  statPill: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
  },
  bottomActions: {
    marginBottom: spacing.md,
  },
  loginLinkWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
});

export default SplashScreen;
