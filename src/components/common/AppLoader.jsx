/**
 * src/components/common/AppLoader.jsx
 */

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { AppText } from './AppText';

export const AppLoader = ({ message, style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="large" color={colors.dark.primary} />
      {message && (
        <AppText variant="bodySmall" color={colors.text.secondary} style={styles.message}>
          {message}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    marginTop: spacing.sm,
  },
});

export default AppLoader;
