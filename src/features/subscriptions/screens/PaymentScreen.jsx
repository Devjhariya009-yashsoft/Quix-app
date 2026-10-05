/**
 * src/features/subscriptions/screens/PaymentScreen.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
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

export const PaymentScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { planId = 'standard', amount = 699, planName = 'Standard Plan (3 Months)' } = route.params || {};

  const [paymentGateway, setPaymentGateway] = useState('razorpay');
  const [loading, setLoading] = useState(false);

  const gst = Math.round(amount * 0.18);
  const totalPayable = amount + gst;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Payment Successful! 🎉',
        `Your subscription for ${planName} has been activated. All mock tests are unlocked!`,
        [
          {
            text: 'Go to Dashboard',
            onPress: () => navigation.navigate('Main'),
          },
        ]
      );
    }, 1200);
  };

  return (
    <SafeAreaWrapper>
      <AppHeader title="Checkout & Payment" showBack onBackPress={() => navigation.goBack()} />

      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        {/* Order Summary Card */}
        <View style={styles.orderCard}>
          <AppText variant="h3" color={colors.text.primary} style={styles.cardHeading}>
            Order Summary
          </AppText>

          <View style={styles.summaryRow}>
            <AppText variant="bodyMedium" color={colors.text.secondary}>
              {planName}
            </AppText>
            <AppText variant="bodyMedium" bold color={colors.text.primary}>
              ₹{amount}
            </AppText>
          </View>

          <View style={styles.summaryRow}>
            <AppText variant="bodyMedium" color={colors.text.secondary}>
              Applicable GST (18%)
            </AppText>
            <AppText variant="bodyMedium" color={colors.text.secondary}>
              ₹{gst}
            </AppText>
          </View>

          <View style={[styles.summaryRow, styles.totalRow]}>
            <AppText variant="h4" color={colors.dark.primary}>
              Total Amount
            </AppText>
            <AppText variant="h2" color={colors.dark.primary}>
              ₹{totalPayable}
            </AppText>
          </View>
        </View>

        {/* Payment Gateways Selection (SRS: Razorpay / PhonePe / PayU) */}
        <View style={styles.gatewaySection}>
          <AppText variant="h4" color={colors.text.primary} style={styles.gatewayHeading}>
            Select Payment Method
          </AppText>

          {/* Razorpay Option */}
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => setPaymentGateway('razorpay')}
            style={[
              styles.gatewayOption,
              paymentGateway === 'razorpay' && styles.gatewaySelected,
            ]}
          >
            <View style={styles.gwLeft}>
              <View style={[styles.gwIconWrap, { backgroundColor: colors.pastel.sky }]}>
                <Ionicons name="card" size={20} color={colors.dark.primary} />
              </View>
              <View>
                <AppText variant="bodyMedium" bold color={colors.text.primary}>
                  Razorpay Secure
                </AppText>
                <AppText variant="caption" color={colors.text.secondary}>
                  UPI, Cards, NetBanking & Wallets
                </AppText>
              </View>
            </View>
            <View style={[styles.radioCircle, paymentGateway === 'razorpay' && styles.radioActive]}>
              {paymentGateway === 'razorpay' && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>

          {/* PhonePe Option */}
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => setPaymentGateway('phonepe')}
            style={[
              styles.gatewayOption,
              paymentGateway === 'phonepe' && styles.gatewaySelected,
            ]}
          >
            <View style={styles.gwLeft}>
              <View style={[styles.gwIconWrap, { backgroundColor: colors.pastel.lavender }]}>
                <Ionicons name="flash" size={20} color={colors.dark.primary} />
              </View>
              <View>
                <AppText variant="bodyMedium" bold color={colors.text.primary}>
                  PhonePe UPI
                </AppText>
                <AppText variant="caption" color={colors.text.secondary}>
                  Instant 1-click UPI checkout
                </AppText>
              </View>
            </View>
            <View style={[styles.radioCircle, paymentGateway === 'phonepe' && styles.radioActive]}>
              {paymentGateway === 'phonepe' && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Security Assurance Banner */}
        <View style={styles.securityBanner}>
          <Ionicons name="shield-checkmark" size={18} color={colors.status.success} />
          <AppText variant="caption" color={colors.text.secondary} style={{ marginLeft: 6 }}>
            Server-side 256-bit encrypted verification. 100% secure payment.
          </AppText>
        </View>

        {/* Pay Button */}
        <View style={styles.btnWrap}>
          <AppButton
            title={`Pay ₹${totalPayable} Securely`}
            onPress={handlePay}
            variant="primary"
            size="large"
            loading={loading}
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
  orderCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.soft,
    marginBottom: spacing.lg,
  },
  cardHeading: {
    marginBottom: spacing.md,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  totalRow: {
    borderTopWidth: 1,
    borderColor: colors.border.light,
    paddingTop: spacing.md,
    marginTop: spacing.sm,
    alignItems: 'center',
  },
  gatewaySection: {
    marginBottom: spacing.lg,
  },
  gatewayHeading: {
    marginBottom: spacing.md,
  },
  gatewayOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    marginBottom: spacing.sm,
    borderWidth: 1.5,
    borderColor: colors.border.light,
  },
  gatewaySelected: {
    borderColor: colors.dark.primary,
    backgroundColor: colors.pastel.lavenderLight,
  },
  gwLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  gwIconWrap: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.border.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: colors.dark.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: radius.full,
    backgroundColor: colors.dark.primary,
  },
  securityBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    marginBottom: spacing.lg,
  },
  btnWrap: {
    marginBottom: spacing.xl,
  },
});

export default PaymentScreen;
