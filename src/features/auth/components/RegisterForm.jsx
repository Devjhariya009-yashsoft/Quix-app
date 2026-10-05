/**
 * src/features/auth/components/RegisterForm.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { AppInput } from '../../../components/common/AppInput';
import { AppButton } from '../../../components/common/AppButton';

export const RegisterForm = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container}>
      <AppInput
        label="Full Name"
        placeholder="e.g. Jacob Sharma"
        value={formData.fullName}
        onChangeText={(val) => handleChange('fullName', val)}
        leftIcon={<Ionicons name="person-outline" size={20} color={colors.text.secondary} />}
      />

      <AppInput
        label="Mobile Number"
        placeholder="Enter 10-digit mobile number"
        keyboardType="phone-pad"
        maxLength={10}
        value={formData.mobile}
        onChangeText={(val) => handleChange('mobile', val)}
        leftIcon={<Ionicons name="call-outline" size={20} color={colors.text.secondary} />}
      />

      <AppInput
        label="Email Address"
        placeholder="example@student.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.email}
        onChangeText={(val) => handleChange('email', val)}
        leftIcon={<Ionicons name="mail-outline" size={20} color={colors.text.secondary} />}
      />

      <AppInput
        label="Password"
        placeholder="Create strong password"
        secureTextEntry={!showPassword}
        value={formData.password}
        onChangeText={(val) => handleChange('password', val)}
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

      <AppInput
        label="Confirm Password"
        placeholder="Re-enter password"
        secureTextEntry={!showPassword}
        value={formData.confirmPassword}
        onChangeText={(val) => handleChange('confirmPassword', val)}
        leftIcon={<Ionicons name="shield-checkmark-outline" size={20} color={colors.text.secondary} />}
      />

      <AppInput
        label="Referral Code (Optional)"
        placeholder="Have an invite code?"
        autoCapitalize="characters"
        value={formData.referralCode}
        onChangeText={(val) => handleChange('referralCode', val)}
        leftIcon={<Ionicons name="gift-outline" size={20} color={colors.text.secondary} />}
      />

      <View style={styles.btnWrap}>
        <AppButton
          title="Create Account"
          onPress={() => onSubmit(formData)}
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
  btnWrap: {
    marginTop: spacing.md,
  },
});

export default RegisterForm;
