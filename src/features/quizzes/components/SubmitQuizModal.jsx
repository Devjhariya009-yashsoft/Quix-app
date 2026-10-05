/**
 * src/features/quizzes/components/SubmitQuizModal.jsx
 */

import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { radius } from '../../../theme/radius';
import { spacing } from '../../../theme/spacing';
import { AppText } from '../../../components/common/AppText';
import { AppButton } from '../../../components/common/AppButton';

export const SubmitQuizModal = ({
  visible,
  onCancel,
  onConfirmSubmit,
  attemptedCount = 0,
  unattemptedCount = 0,
  markedCount = 0,
  loading = false,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="alert-circle" size={40} color={colors.dark.primary} />
          </View>

          <AppText variant="h2" align="center" style={styles.title}>
            Submit Test?
          </AppText>
          <AppText variant="bodySmall" color={colors.text.secondary} align="center" style={styles.subtitle}>
            Are you sure you want to finish and submit your quiz attempt?
          </AppText>

          {/* Breakdown summary pills */}
          <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
              <AppText variant="bodyMedium" color={colors.text.secondary}>
                Answered
              </AppText>
              <AppText variant="bodyMedium" bold color={colors.status.success}>
                {attemptedCount}
              </AppText>
            </View>

            <View style={styles.summaryRow}>
              <AppText variant="bodyMedium" color={colors.text.secondary}>
                Unattempted
              </AppText>
              <AppText variant="bodyMedium" bold color={colors.status.error}>
                {unattemptedCount}
              </AppText>
            </View>

            <View style={styles.summaryRow}>
              <AppText variant="bodyMedium" color={colors.text.secondary}>
                Marked for Review
              </AppText>
              <AppText variant="bodyMedium" bold color={colors.status.review}>
                {markedCount}
              </AppText>
            </View>
          </View>

          {/* Action buttons */}
          <View style={styles.btnRow}>
            <View style={styles.btnFlex}>
              <AppButton
                title="Review Test"
                onPress={onCancel}
                variant="outline"
                size="medium"
              />
            </View>
            <View style={styles.btnFlex}>
              <AppButton
                title="Yes, Submit"
                onPress={onConfirmSubmit}
                variant="primary"
                size="medium"
                loading={loading}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.background.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  card: {
    width: '100%',
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    alignItems: 'center',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: radius.full,
    backgroundColor: colors.pastel.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  title: {
    marginBottom: spacing.xxs,
  },
  subtitle: {
    marginBottom: spacing.lg,
  },
  summaryContainer: {
    width: '100%',
    backgroundColor: colors.background.secondary,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.xl,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  btnRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    width: '100%',
  },
  btnFlex: {
    flex: 1,
  },
});

export default SubmitQuizModal;
