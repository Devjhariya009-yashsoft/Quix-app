import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, shadows } from '../../../theme';
import AppText from '../../../components/common/AppText';
import ScreenContainer from '../../../components/layout/ScreenContainer';
import AppHeader from '../../../components/common/AppHeader';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to sign out from this device?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Log Out', 
          style: 'destructive',
          onPress: () => {
            if (navigation && navigation.navigate) {
              navigation.navigate('Auth', { screen: 'Login' });
            }
          }
        },
      ]
    );
  };

  return (
    <ScreenContainer scrollable={false} backgroundColor={colors.background.primary}>
      <AppHeader
        title="My Profile"
        showBack={false}
        rightIcon="settings-outline"
        onRightPress={() => navigation && navigation.navigate && navigation.navigate('EditProfile')}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* User Card */}
        <View style={styles.profileHero}>
          <View style={styles.avatarLarge}>
            <AppText variant="h1">👨‍🎓</AppText>
          </View>
          <AppText variant="h2" weight="bold" color={colors.text.inverse}>
            Rahul Sharma
          </AppText>
          <AppText variant="bodySmall" color={colors.text.inverseMuted}>
            rahul.sharma@example.com • +91 98765 43210
          </AppText>
          <View style={styles.examBadge}>
            <Ionicons name="school" size={14} color="#7C3AED" />
            <AppText variant="caption" weight="bold" color="#7C3AED">
              SSC CGL 2026 Aspirant
            </AppText>
          </View>
        </View>

        {/* Subscription Banner */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.subBanner}
          onPress={() => navigation && navigation.navigate && navigation.navigate('SubscriptionPlans')}
        >
          <View style={styles.subBannerLeft}>
            <View style={styles.proPill}>
              <Ionicons name="sparkles" size={14} color="#059669" />
              <AppText variant="caption" weight="bold" color="#059669">PRO PASS ACTIVE</AppText>
            </View>
            <AppText variant="bodyMedium" weight="bold" style={{ marginTop: 4 }}>
              3-Month All-Access Pass
            </AppText>
            <AppText variant="caption" color={colors.text.secondary}>
              Valid till 15 Nov 2026 • 42 days left
            </AppText>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.text.secondary} />
        </TouchableOpacity>

        {/* Menu Sections */}
        <View style={styles.menuSection}>
          <AppText variant="caption" weight="bold" color={colors.text.tertiary} style={styles.sectionLabel}>
            ACCOUNT SETTINGS
          </AppText>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation && navigation.navigate && navigation.navigate('EditProfile')}
          >
            <View style={[styles.menuIconCircle, { backgroundColor: colors.pastel.lavender }]}>
              <Ionicons name="person-outline" size={18} color="#7C3AED" />
            </View>
            <AppText variant="bodyMedium" weight="semiBold" style={{ flex: 1 }}>Edit Profile Information</AppText>
            <Ionicons name="chevron-forward" size={18} color={colors.text.tertiary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation && navigation.navigate && navigation.navigate('ChangePassword')}
          >
            <View style={[styles.menuIconCircle, { backgroundColor: colors.pastel.yellow }]}>
              <Ionicons name="lock-closed-outline" size={18} color="#D97706" />
            </View>
            <AppText variant="bodyMedium" weight="semiBold" style={{ flex: 1 }}>Change Password</AppText>
            <Ionicons name="chevron-forward" size={18} color={colors.text.tertiary} />
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <AppText variant="caption" weight="bold" color={colors.text.tertiary} style={styles.sectionLabel}>
            PREFERENCES & BILLING
          </AppText>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation && navigation.navigate && navigation.navigate('SubscriptionPlans')}
          >
            <View style={[styles.menuIconCircle, { backgroundColor: colors.pastel.mint }]}>
              <Ionicons name="card-outline" size={18} color="#059669" />
            </View>
            <AppText variant="bodyMedium" weight="semiBold" style={{ flex: 1 }}>Manage Subscription</AppText>
            <Ionicons name="chevron-forward" size={18} color={colors.text.tertiary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation && navigation.navigate && navigation.navigate('Notifications')}
          >
            <View style={[styles.menuIconCircle, { backgroundColor: colors.pastel.sky }]}>
              <Ionicons name="notifications-outline" size={18} color="#2563EB" />
            </View>
            <AppText variant="bodyMedium" weight="semiBold" style={{ flex: 1 }}>Notification Alerts</AppText>
            <Ionicons name="chevron-forward" size={18} color={colors.text.tertiary} />
          </TouchableOpacity>
        </View>

        {/* Log Out CTA */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <AppText variant="bodyMedium" weight="bold" color="#EF4444">
            Log Out from Account
          </AppText>
        </TouchableOpacity>

        <AppText variant="caption" align="center" color={colors.text.tertiary} style={{ marginTop: spacing.lg }}>
          Test India - Exam Prep v1.0.0
        </AppText>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 100,
  },
  profileHero: {
    backgroundColor: colors.dark.primary,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    alignItems: 'center',
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  avatarLarge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  examBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.pastel.lavender,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.full,
    marginTop: spacing.md,
    gap: 6,
  },
  subBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.pastel.mint,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: '#A6EBD3',
    ...shadows.sm,
  },
  subBannerLeft: {
    flex: 1,
  },
  proPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  menuSection: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.sm,
  },
  sectionLabel: {
    marginBottom: spacing.sm,
    marginLeft: spacing.xs,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    gap: spacing.md,
  },
  menuIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: radius.full,
    paddingVertical: spacing.md,
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
});

export default ProfileScreen;
