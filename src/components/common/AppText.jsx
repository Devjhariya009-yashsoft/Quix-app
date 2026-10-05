/**
 * src/components/common/AppText.jsx
 */

import React from 'react';
import { Text as RNText } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

export const AppText = ({
  variant = 'bodyMedium',
  color,
  align = 'left',
  bold = false,
  style,
  children,
  ...props
}) => {
  const baseStyle = typography[variant] || typography.bodyMedium;

  return (
    <RNText
      style={[
        baseStyle,
        {
          color: color || colors.text.primary,
          textAlign: align,
          ...(bold ? { fontWeight: '700' } : {}),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default AppText;
