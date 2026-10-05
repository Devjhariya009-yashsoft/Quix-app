import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius } from '../../../theme';
import AppText from '../../../components/common/AppText';
import AppInput from '../../../components/common/AppInput';
import AppButton from '../../../components/common/AppButton';
import ScreenContainer from '../../../components/layout/ScreenContainer';
import AppHeader from '../../../components/common/AppHeader';

const EditProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('Rahul Sharma');
  const [email, setEmail] = useState('rahul.sharma@example.com');
  const [phone, setPhone] = useState('9876543210');
  const [targetExam, setTargetExam] = useState('SSC CGL 2026');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Profile Updated', 'Your profile details have been saved successfully.');
      if (navigation && navigation.goBack) {
        navigation.goBack();
      }
    }, 800);
  };

  return (
    <ScreenContainer scrollable={true} backgroundColor={colors.background.primary}>
      <AppHeader
        title="Edit Profile"
        showBack={true}
        onBackPress={() => navigation && navigation.goBack && navigation.goBack()}
      />

      <View style={styles.contentContainer}>
        {/* Avatar change section */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarLarge}>
            <AppText variant="h1">👨‍🎓</AppText>
          </View>
          <TouchableOpacity style={styles.changeBadge}>
            <Ionicons name="camera" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <AppInput
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          leftIcon="person-outline"
        />

        <AppInput
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          leftIcon="mail-outline"
        />

        <AppInput
          label="Mobile Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          leftIcon="call-outline"
        />

        <AppInput
          label="Target Competitive Exam"
          value={targetExam}
          onChangeText={setTargetExam}
          leftIcon="school-outline"
        />

        <View style={{ marginTop: spacing.xl }}>
          <AppButton
            title="Save Changes"
            onPress={handleSave}
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
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: spacing.xl,
    position: 'relative',
  },
  avatarLarge: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.pastel.lavender,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.dark.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

export default EditProfileScreen;
