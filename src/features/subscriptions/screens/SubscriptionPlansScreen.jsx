/**
 * src/features/subscriptions/screens/SubscriptionPlansScreen.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

const plans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    duration: '1 Month Access',
    price: 299,
    originalPrice: 499,
    bg: colors.background.surface,
    badge: null,
    features: [
      'Access to 50+ Practice Tests',
      'Instant Scorecard & Solutions',
      'Hindi & English Support',
      'Basic Performance Analytics',
    ],
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    duration: '3 Months Access',
    price: 699,
    originalPrice: 1199,
    bg: colors.pastel.lavenderLight,
    badge: 'MOST POPULAR 🔥',
    features: [
      'Access to 250+ Mock Tests',
      'All-India Live Rankings',
      'Full Bilingual Solutions & Review',
      'Sectional Cutoff Analytics',
      'Priority Doubt Assistance',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Pass',
    duration: '12 Months (1 Year)',
    price: 1499,
    originalPrice: 2999,
    bg: colors.background.surface,
    badge: 'BEST VALUE 💎',
    features: [
      'Unlimited Access to All Test Series',
      'SSC, Banking & Railway Mock Bundles',
      'Comprehensive Deep Analytics',
      'Offline Attempt Download Support',
      'Verified Badge on Leaderboard',
    ],
  },
];

export const SubscriptionPlansScreen = () => {
  const navigation = useNavigation();
  const [selectedPlanId, setSelectedPlanId] = useState('standard');

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];

  const handleProceed = () => {
    navigation.navigate('Payment', {
      planId: selectedPlan.id,
      amount: selectedPlan.price,
      planName: selectedPlan.name,
    });
  };

  return (
    <SafeAreaWrapper>
      <AppHeader title="Subscription Plans" showBack onBackPress={() => navigation.goBack()} />

      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        {/* Top Pitch */}
        <View style={styles.topPitch}>
          <AppText variant="h2" color={colors.text.primary} style={styles.title}>
            Unlock Your Full Exam Potential 🌟
          </AppText>
          <AppText variant="bodySmall" color={colors.text.secondary}>
            Choose a pass that fits your study timeline and start competing on All-India rank leaderboards.
          </AppText>
        </View>

        {/* Plans Carousel/List */}
        {plans.map((plan) => {
          const isSelected = plan.id === selectedPlanId;
          return (
            <TouchableOpacity
              key={plan.id}
              activeOpacity={0.9}
              onPress={() => setSelectedPlanId(plan.id)}
              style={[
                styles.planCard,
                { backgroundColor: plan.bg },
                isSelected && styles.planCardSelected,
              ]}
            >
              {plan.badge && (
                <View style={styles.badge}>
                  <AppText variant="caption" bold color={colors.dark.primary}>
                    {plan.badge}
                  </AppText>
                </View>
              )}

              <View style={styles.planHeader}>
                <View>
                  <AppText variant="h3" color={colors.text.primary}>
                    {plan.name}
                  </AppText>
                  <AppText variant="caption" color={colors.text.secondary}>
                    {plan.duration}
                  </AppText>
                </View>

                <View style={styles.priceWrap}>
                  <AppText variant="numberMedium" color={colors.dark.primary}>
                    ₹{plan.price}
                  </AppText>
                  <AppText variant="caption" color={colors.text.tertiary} style={styles.strikethrough}>
                    ₹{plan.originalPrice}
                  </AppText>
                </View>
              </View>

              {/* Feature Checklist */}
              <View style={styles.featuresList}>
                {plan.features.map((feat, idx) => (
                  <View key={idx} style={styles.featRow}>
                    <Ionicons name="checkmark-circle" size={16} color={colors.status.success} />
                    <AppText variant="bodySmall" color={colors.text.secondary} style={styles.featText}>
                      {feat}
                    </AppText>
                  </View>
                ))}
              </View>

              {/* Selection Indicator Pill */}
              <View style={styles.selectRow}>
                <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                  {isSelected && <View style={styles.radioInner} />}
                </View>
                <AppText variant="buttonSmall" bold color={isSelected ? colors.dark.primary : colors.text.secondary}>
                  {isSelected ? 'Plan Selected' : 'Tap to Choose'}
                </AppText>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* Sticky Continue CTA */}
        <View style={styles.ctaWrap}>
          <AppButton
            title={`Subscribe to ${selectedPlan.name} (₹${selectedPlan.price})`}
            onPress={handleProceed}
            variant="primary"
            size="large"
            rightIcon={<Ionicons name="lock-open" size={16} color="#FFFFFF" />}
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
  topPitch: {
    marginBottom: spacing.lg,
  },
  title: {
    marginBottom: spacing.xxs,
  },
  planCard: {
    borderRadius: radius.xxl,
    padding: spacing.xl,
    marginBottom: spacing.md,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    ...shadows.soft,
  },
  planCardSelected: {
    borderColor: colors.dark.primary,
    ...shadows.medium,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.pastel.yellow,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
    marginBottom: spacing.xs,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  priceWrap: {
    alignItems: 'flex-end',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  featuresList: {
    paddingVertical: spacing.xs,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    marginBottom: spacing.md,
  },
  featRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  featText: {
    marginLeft: spacing.xs,
  },
  selectRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.border.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.xs,
  },
  radioOuterSelected: {
    borderColor: colors.dark.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    backgroundColor: colors.dark.primary,
  },
  ctaWrap: {
    marginTop: spacing.md,
    marginBottom: spacing.xxl,
  },
});

export default SubscriptionPlansScreen;
