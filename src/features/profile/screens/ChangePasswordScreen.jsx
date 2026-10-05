import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { colors, spacing } from '../../../theme';
import AppText from '../../../components/common/AppText';
import AppInput from '../../../components/common/AppInput';
import AppButton from '../../../components/common/AppButton';
import ScreenContainer from '../../../components/layout/ScreenContainer';
import AppHeader from '../../../components/common/AppHeader';

const ChangePasswordScreen = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Incomplete Fields', 'Please fill in all password fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Mismatch', 'New password and confirm password do not match.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success', 'Password changed successfully!');
      if (navigation && navigation.goBack) {
        navigation.goBack();
      }
    }, 800);
  };

  return (
    <ScreenContainer scrollable={true} backgroundColor={colors.background.primary}>
      <AppHeader
        title="Change Password"
        showBack={true}
        onBackPress={() => navigation && navigation.goBack && navigation.goBack()}
      />

      <View style={styles.contentContainer}>
        <AppText variant="bodySmall" color={colors.text.secondary} style={{ marginBottom: spacing.lg }}>
          Ensure your account is using a strong password with at least 8 characters including numbers and symbols.
        </AppText>

        <AppInput
          label="Current Password"
          placeholder="Enter current password"
          secureTextEntry
          value={currentPassword}
          onChangeText={setCurrentPassword}
          leftIcon="lock-closed-outline"
        />

        <AppInput
          label="New Password"
          placeholder="Enter at least 8 characters"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          leftIcon="shield-checkmark-outline"
        />

        <AppInput
          label="Confirm New Password"
          placeholder="Re-enter new password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          leftIcon="shield-checkmark-outline"
        />

        <View style={{ marginTop: spacing.xl }}>
          <AppButton
            title="Update Password"
            onPress={handleUpdate}
            loading={isLoading}
            variant="primary"
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
  },
});

export default ChangePasswordScreen;
