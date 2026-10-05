/**
 * src/components/layout/SafeAreaWrapper.jsx
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';

export const SafeAreaWrapper = ({
  children,
  style,
  edges = ['top', 'left', 'right'],
  ...props
}) => {
  return (
    <SafeAreaView edges={edges} style={[styles.safeArea, style]} {...props}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
});

export default SafeAreaWrapper;
