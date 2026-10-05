/**
 * src/features/auth/components/LoginForm.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { AppText } from '../../../components/common/AppText';
import { AppInput } from '../../../components/common/AppInput';
import { AppButton } from '../../../components/common/AppButton';

export const LoginForm = ({
  onLoginWithEmail,
  onLoginWithOtp,
  onForgotPassword,
  loading = false,
}) => {
  const [loginMethod, setLoginMethod] = useState('otp');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (loginMethod === 'otp') {
      onLoginWithOtp(mobile);
    } else {
      onLoginWithEmail(email, password);
    }
  };

  return (
    <View style={styles.container}>
      {/* Method Switcher Pills */}
      <View style={styles.switcherContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setLoginMethod('otp')}
          style={[styles.switchTab, loginMethod === 'otp' && styles.switchTabActive]}
        >
          <AppText
            variant="buttonSmall"
            color={loginMethod === 'otp' ? colors.dark.primary : colors.text.secondary}
          >
            Mobile + OTP
          </AppText>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setLoginMethod('password')}
          style={[styles.switchTab, loginMethod === 'password' && styles.switchTabActive]}
        >
          <AppText
            variant="buttonSmall"
            color={loginMethod === 'password' ? colors.dark.primary : colors.text.secondary}
          >
            Email + Password
          </AppText>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      {loginMethod === 'otp' ? (
        <AppInput
          label="Mobile Number"
          placeholder="Enter 10-digit mobile number"
          keyboardType="phone-pad"
          maxLength={10}
          value={mobile}
          onChangeText={setMobile}
          leftIcon={<Ionicons name="call-outline" size={20} color={colors.text.secondary} />}
        />
      ) : (
        <>
          <AppInput
            label="Email Address"
            placeholder="example@student.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            leftIcon={<Ionicons name="mail-outline" size={20} color={colors.text.secondary} />}
          />

          <AppInput
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            leftIcon={<Ionicons name="lock-closed-outline" size={20} color={colors.text.secondary} />}
            rightIcon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={colors.text.secondary}
                />
              </TouchableOpacity>
            }
          />

          <TouchableOpacity onPress={onForgotPassword} style={styles.forgotBtn}>
            <AppText variant="caption" bold color={colors.text.brand}>
              Forgot Password?
            </AppText>
          </TouchableOpacity>
        </>
      )}

      {/* Submit Button */}
      <View style={styles.submitWrap}>
        <AppButton
          title={loginMethod === 'otp' ? 'Get OTP' : 'Sign In'}
          onPress={handleSubmit}
          variant="primary"
          size="large"
          loading={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  switcherContainer: {
    flexDirection: 'row',
    backgroundColor: colors.background.surface,
    borderRadius: radius.full,
    padding: spacing.xxs,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  switchTab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: radius.full,
  },
  switchTabActive: {
    backgroundColor: colors.pastel.lavender,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginBottom: spacing.lg,
    marginTop: -spacing.xs,
  },
  submitWrap: {
    marginTop: spacing.md,
  },
});

export default LoginForm;
