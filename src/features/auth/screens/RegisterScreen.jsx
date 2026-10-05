/**
 * src/features/auth/screens/RegisterScreen.jsx
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
import { RegisterForm } from '../components/RegisterForm';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleRegister = (data) => {
    if (!data.mobile || !data.fullName) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OtpVerification', {
        mobile: data.mobile,
        purpose: 'register',
      });
    }, 600);
  };

  return (
    <SafeAreaWrapper>
      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        <AuthHeader
          badgeText="New Student"
          title="Start Your Journey 🚀"
          subtitle="Create your free student account and begin your exam preparation today."
        />

        <RegisterForm onSubmit={handleRegister} loading={loading} />

        <View style={styles.footerWrap}>
          <AppText variant="bodySmall" color={colors.text.secondary}>
            Already registered?{' '}
          </AppText>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <AppText variant="bodySmall" bold color={colors.text.brand}>
              Sign In
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
  },
  footerWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
    paddingVertical: spacing.md,
  },
});

export default RegisterScreen;
