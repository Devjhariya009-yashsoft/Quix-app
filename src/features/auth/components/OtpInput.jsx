/**
 * src/features/auth/components/OtpInput.jsx
 */

import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { radius } from '../../../theme/radius';
import { spacing } from '../../../theme/spacing';

export const OtpInput = ({ length = 6, onCodeFilled }) => {
  const [digits, setDigits] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newDigits = [...digits];
    newDigits[index] = text;
    setDigits(newDigits);

    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const fullCode = newDigits.join('');
    if (fullCode.length === length && !newDigits.includes('')) {
      onCodeFilled(fullCode);
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <View
            key={i}
            style={[
              styles.box,
              Boolean(digits[i]) && styles.boxFilled,
            ]}
          >
            <TextInput
              ref={(ref) => (inputRefs.current[i] = ref)}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digits[i]}
              onChangeText={(text) => handleChange(text, i)}
              onKeyPress={(e) => handleKeyPress(e, i)}
              textAlign="center"
              selectTextOnFocus
            />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: spacing.lg,
  },
  box: {
    width: 48,
    height: 56,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.border.light,
    backgroundColor: colors.background.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxFilled: {
    borderColor: colors.dark.primary,
    backgroundColor: colors.pastel.lavenderLight,
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: 22,
    fontWeight: '800',
    color: colors.dark.primary,
    textAlign: 'center',
  },
});

export default OtpInput;
