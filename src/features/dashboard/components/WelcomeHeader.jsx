/**
 * src/features/dashboard/components/WelcomeHeader.jsx
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { AppText } from '../../../components/common/AppText';

export const WelcomeHeader = ({
  studentName = 'Jacob',
  onNotificationPress,
  unreadCount = 2,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftRow}>
        <View style={styles.avatarCircle}>
          <AppText variant="h3" color={colors.dark.primary}>
            {studentName.charAt(0).toUpperCase()}
          </AppText>
        </View>

        <View style={styles.textWrap}>
          <AppText variant="caption" color={colors.text.secondary}>
            STUDENT DASHBOARD
          </AppText>
          <AppText variant="h2" color={colors.text.primary} numberOfLines={1}>
            Hey, {studentName} 👋
          </AppText>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onNotificationPress}
        style={styles.notificationBtn}
      >
        <Ionicons name="notifications-outline" size={22} color={colors.dark.primary} />
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <AppText variant="caption" bold color="#FFFFFF" style={{ fontSize: 9 }}>
              {unreadCount}
            </AppText>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    backgroundColor: colors.pastel.lavender,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  textWrap: {
    flex: 1,
  },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    backgroundColor: colors.background.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: colors.status.error,
    borderRadius: radius.full,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeHeader;
