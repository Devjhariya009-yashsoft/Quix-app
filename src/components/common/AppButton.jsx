/**
 * src/components/common/AppButton.jsx
 */

import React, { useRef } from 'react';
import {
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { shadows } from '../../theme/shadows';
import { AppText } from './AppText';

export const AppButton = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  fullWidth = true,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 30,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 4,
    }).start();
  };

  const getContainerStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.dark.primary,
          ...shadows.darkPill,
        };
      case 'secondary':
        return {
          backgroundColor: colors.pastel.lavender,
        };
      case 'yellow':
        return {
          backgroundColor: colors.pastel.yellow,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: colors.dark.primary,
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
        };
      case 'danger':
        return {
          backgroundColor: colors.status.error,
        };
      default:
        return {
          backgroundColor: colors.dark.primary,
        };
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
      case 'danger':
        return colors.text.inverse;
      case 'secondary':
      case 'yellow':
      case 'outline':
      case 'ghost':
        return colors.dark.primary;
      default:
        return colors.text.inverse;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          height: 38,
          paddingHorizontal: spacing.md,
          borderRadius: radius.full,
        };
      case 'medium':
        return {
          height: 48,
          paddingHorizontal: spacing.xl,
          borderRadius: radius.full,
        };
      case 'large':
      default:
        return {
          height: 56,
          paddingHorizontal: spacing.xxl,
          borderRadius: radius.full,
        };
    }
  };

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, fullWidth && { width: '100%' }]}>
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled || loading}
        style={[
          styles.base,
          getSizeStyle(),
          getContainerStyle(),
          disabled && styles.disabled,
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={getTextColor()} size="small" />
        ) : (
          <View style={styles.contentRow}>
            {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
            <AppText
              variant={size === 'small' ? 'buttonSmall' : 'button'}
              color={getTextColor()}
              style={[styles.text, textStyle]}
            >
              {title}
            </AppText>
            {rightIcon && <View style={styles.rightIconContainer}>{rightIcon}</View>}
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconContainer: {
    marginRight: spacing.xs,
  },
  rightIconContainer: {
    marginLeft: spacing.xs,
  },
  text: {
    letterSpacing: 0.3,
  },
  disabled: {
    opacity: 0.45,
  },
});

export default AppButton;
