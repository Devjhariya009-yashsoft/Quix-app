/**
 * src/theme/typography.js
 */

import { Platform } from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const typography = {
  fontFamily,

  h1: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
  numberLarge: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  numberMedium: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '800',
  },
  button: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  buttonSmall: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
  },
  caption: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
};

export default typography;
