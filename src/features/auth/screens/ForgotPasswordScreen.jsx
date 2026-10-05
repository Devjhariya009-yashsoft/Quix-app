/**
 * src/features/auth/screens/ForgotPasswordScreen.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { ScreenContainer } from '../../../components/layout/ScreenContainer';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { AppHeader } from '../../../components/common/AppHeader';
import { AppText } from '../../../components/common/AppText';
import { AppInput } from '../../../components/common/AppInput';
import { AppButton } from '../../../components/common/AppButton';

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = () => {
    if (!mobile || mobile.length < 10) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OtpVerification', {
        mobile,
        purpose: 'forgot_password',
      });
    }, 600);
  };

  return (
    <SafeAreaWrapper>
      <AppHeader title="Forgot Password" showBack onBackPress={() => navigation.goBack()} />

      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        <View style={styles.topInfo}>
          <AppText variant="h2" color={colors.text.primary} style={styles.title}>
            Reset Your Password 🔑
          </AppText>
          <AppText variant="bodyMedium" color={colors.text.secondary} style={styles.subtitle}>
            Enter your registered mobile number. We will send an OTP to verify and reset your password.
          </AppText>
        </View>

        <AppInput
          label="Registered Mobile Number"
          placeholder="Enter 10-digit mobile number"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
          leftIcon={<Ionicons name="call-outline" size={20} color={colors.text.secondary} />}
        />

        <View style={styles.btnWrap}>
          <AppButton
            title="Send Verification OTP"
            onPress={handleSendOtp}
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
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  topInfo: {
    marginBottom: spacing.xl,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    lineHeight: 22,
  },
  btnWrap: {
    marginTop: spacing.xl,
  },
});

export default ForgotPasswordScreen;
