/**
 * src/components/common/EmptyState.jsx
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { AppText } from './AppText';
import { AppButton } from './AppButton';

export const EmptyState = ({
  icon = 'file-tray-outline',
  title,
  description,
  actionTitle,
  onActionPress,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={36} color={colors.dark.primary} />
      </View>

      <AppText variant="h3" align="center" style={styles.title}>
        {title}
      </AppText>

      {description && (
        <AppText variant="bodyMedium" color={colors.text.secondary} align="center" style={styles.description}>
          {description}
        </AppText>
      )}

      {actionTitle && onActionPress && (
        <View style={styles.actionWrap}>
          <AppButton
            title={actionTitle}
            onPress={onActionPress}
            size="medium"
            variant="primary"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.light,
    marginVertical: spacing.md,
  },
  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: radius.full,
    backgroundColor: colors.pastel.lavender,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.xs,
  },
  description: {
    lineHeight: 22,
    marginBottom: spacing.lg,
  },
  actionWrap: {
    width: '100%',
    maxWidth: 240,
    marginTop: spacing.xs,
  },
});

export default EmptyState;
