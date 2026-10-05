/**
 * src/features/dashboard/components/SubscriptionCard.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { AppText } from '../../../components/common/AppText';

export const SubscriptionCard = ({
  isActive = false,
  planName = 'Standard Plan',
  daysRemaining = 24,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.card,
        { backgroundColor: isActive ? colors.pastel.lavender : colors.pastel.yellow },
      ]}
    >
      <View style={styles.contentRow}>
        <View style={styles.textColumn}>
          <View style={styles.statusPill}>
            <View
              style={[
                styles.dot,
                { backgroundColor: isActive ? colors.status.success : colors.status.warning },
              ]}
            />
            <AppText variant="caption" bold color={colors.dark.primary}>
              {isActive ? 'ACTIVE SUBSCRIPTION' : 'FREE TIER'}
            </AppText>
          </View>

          <AppText variant="h3" color={colors.dark.primary} style={styles.planTitle}>
            {isActive ? planName : 'Unlock All Mock Tests'}
          </AppText>

          <AppText variant="bodySmall" color={colors.text.secondary}>
            {isActive
              ? `${daysRemaining} days remaining in your plan`
              : 'Subscribe to access 500+ full-length exam series'}
          </AppText>
        </View>

        <View style={styles.iconCircle}>
          <Ionicons
            name={isActive ? 'shield-checkmark' : 'sparkles'}
            size={28}
            color={colors.dark.primary}
          />
        </View>
      </View>

      <View style={styles.footerRow}>
        <AppText variant="buttonSmall" color={colors.dark.primary}>
          {isActive ? 'Manage Subscription' : 'Explore Plans from ₹199'}
        </AppText>
        <Ionicons name="arrow-forward" size={16} color={colors.dark.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xxl,
    padding: spacing.xl,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.sm,
    ...shadows.soft,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textColumn: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
    marginBottom: spacing.xs,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  planTitle: {
    marginBottom: spacing.xxs,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.06)',
  },
});

export default SubscriptionCard;
