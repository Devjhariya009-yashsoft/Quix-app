/**
 * src/features/auth/components/AuthHeader.jsx
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { AppText } from '../../../components/common/AppText';

export const AuthHeader = ({
  badgeText = 'Smart Learning',
  title,
  subtitle,
}) => {
  return (
    <View style={styles.container}>
      {badgeText && (
        <View style={styles.badge}>
          <AppText variant="caption" bold color={colors.dark.primary}>
            {badgeText}
          </AppText>
        </View>
      )}

      <AppText variant="h1" color={colors.text.primary} style={styles.title}>
        {title}
      </AppText>

      <AppText variant="bodyMedium" color={colors.text.secondary} style={styles.subtitle}>
        {subtitle}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xxl,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.pastel.yellow,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
    marginBottom: spacing.sm,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    lineHeight: 22,
  },
});

export default AuthHeader;
