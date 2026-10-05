/**
 * src/features/auth/screens/LoginScreen.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { ScreenContainer } from '../../../components/layout/ScreenContainer';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { AppText } from '../../../components/common/AppText';
import { AuthHeader } from '../components/AuthHeader';
import { LoginForm } from '../components/LoginForm';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLoginWithEmail = (email, pass) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main');
    }, 800);
  };

  const handleLoginWithOtp = (mobile) => {
    if (!mobile || mobile.length < 10) return;
    navigation.navigate('OtpVerification', { mobile, purpose: 'login' });
  };

  return (
    <SafeAreaWrapper>
      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        <AuthHeader
          badgeText="Student Login"
          title="Welcome Back! 👋"
          subtitle="Sign in to resume your mock tests and check your latest leaderboard rank."
        />

        <LoginForm
          onLoginWithEmail={handleLoginWithEmail}
          onLoginWithOtp={handleLoginWithOtp}
          onForgotPassword={() => navigation.navigate('ForgotPassword')}
          loading={loading}
        />

        <View style={styles.footerWrap}>
          <AppText variant="bodySmall" color={colors.text.secondary}>
            Don't have an account?{' '}
          </AppText>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <AppText variant="bodySmall" bold color={colors.text.brand}>
              Create Account
            </AppText>
          </TouchableOpacity>
        </View>
      </ScreenContainer>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    justifyContent: 'space-between',
  },
  footerWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xxl,
    paddingVertical: spacing.md,
  },
});

export default LoginScreen;
