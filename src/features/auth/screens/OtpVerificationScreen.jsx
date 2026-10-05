/**
 * src/features/auth/screens/OtpVerificationScreen.jsx
 */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { ScreenContainer } from '../../../components/layout/ScreenContainer';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { AppHeader } from '../../../components/common/AppHeader';
import { AppText } from '../../../components/common/AppText';
import { AppButton } from '../../../components/common/AppButton';
import { OtpInput } from '../components/OtpInput';

export const OtpVerificationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { mobile = '9876543210', purpose = 'login' } = route.params || {};

  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (otp.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main');
    }, 800);
  };

  return (
    <SafeAreaWrapper>
      <AppHeader title="OTP Verification" showBack onBackPress={() => navigation.goBack()} />

      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        <View style={styles.topInfo}>
          <AppText variant="h2" color={colors.text.primary} style={styles.title}>
            Enter 6-Digit Code 🔐
          </AppText>
          <AppText variant="bodyMedium" color={colors.text.secondary} style={styles.subtitle}>
            We've sent a one-time verification code to{' '}
            <AppText variant="bodyMedium" bold color={colors.dark.primary}>
              +91 {mobile}
            </AppText>
          </AppText>
        </View>

        <OtpInput length={6} onCodeFilled={setOtp} />

        <View style={styles.resendRow}>
          {timer > 0 ? (
            <AppText variant="bodySmall" color={colors.text.secondary}>
              Resend code in <AppText variant="bodySmall" bold color={colors.dark.primary}>{timer}s</AppText>
            </AppText>
          ) : (
            <TouchableOpacity onPress={() => setTimer(30)}>
              <AppText variant="bodySmall" bold color={colors.text.brand}>
                Resend OTP Now
              </AppText>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.btnWrap}>
          <AppButton
            title="Verify & Continue"
            onPress={handleVerify}
            variant="primary"
            size="large"
            loading={loading}
            disabled={otp.length < 6}
          />
        </View>
      </ScreenContainer>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  topInfo: {
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    lineHeight: 22,
  },
  resendRow: {
    alignItems: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
  btnWrap: {
    marginTop: spacing.lg,
  },
});

export default OtpVerificationScreen;
