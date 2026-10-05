/**
 * src/features/results/screens/QuestionReviewScreen.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { ScreenContainer } from '../../../components/layout/ScreenContainer';
import { AppHeader } from '../../../components/common/AppHeader';
import { AppText } from '../../../components/common/AppText';

const mockSolutions = [
  {
    id: 1,
    qNum: 1,
    questionEn: 'Which of the following is known as the powerhouse of the cell?',
    questionHi: 'निम्नलिखित में से किसे कोशिका का पावरहाउस कहा जाता है?',
    studentAnswerKey: 'B',
    correctAnswerKey: 'B',
    isCorrect: true,
    options: [
      { key: 'A', en: 'Ribosome', hi: 'राइबोसोम' },
      { key: 'B', en: 'Mitochondria', hi: 'माइटोकॉन्ड्रिया' },
      { key: 'C', en: 'Golgi Apparatus', hi: 'गॉल्जी उपकरण' },
      { key: 'D', en: 'Nucleus', hi: 'नाभिक' },
    ],
    explanationEn: 'Mitochondria are membrane-bound cell organelles that generate most of the chemical energy needed to power the cell’s biochemical reactions, stored in adenosine triphosphate (ATP). Hence, they are known as the powerhouse of the cell.',
    explanationHi: 'माइटोकॉन्ड्रिया झिल्ली से जुड़े अंग हैं जो कोशिका की जैव रासायनिक प्रतिक्रियाओं को शक्ति देने के लिए आवश्यक अधिकांश रासायनिक ऊर्जा (ATP) उत्पन्न करते हैं। इसलिए इन्हें कोशिका का पावरहाउस कहा जाता है।',
  },
  {
    id: 2,
    qNum: 2,
    questionEn: 'The Harappan site Lothal is situated in which of the following states?',
    questionHi: 'हड़प्पा स्थल लोथल निम्नलिखित में से किस राज्य में स्थित है?',
    studentAnswerKey: 'B',
    correctAnswerKey: 'A',
    isCorrect: false,
    options: [
      { key: 'A', en: 'Gujarat', hi: 'गुजरात' },
      { key: 'B', en: 'Rajasthan', hi: 'राजस्थान' },
      { key: 'C', en: 'Punjab', hi: 'पंजाब' },
      { key: 'D', en: 'Haryana', hi: 'हरियाणा' },
    ],
    explanationEn: 'Lothal was one of the southernmost sites of the ancient Indus Valley Civilisation, located in the Bhal region of the modern state of Gujarat.',
    explanationHi: 'लोथल प्राचीन सिंधु घाटी सभ्यता का सबसे दक्षिणी स्थल था, जो आधुनिक गुजरात राज्य के भाल क्षेत्र में स्थित है।',
  },
];

export const QuestionReviewScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState('en');

  const item = mockSolutions[currentIndex];
  const total = mockSolutions.length;

  return (
    <SafeAreaWrapper>
      <AppHeader
        title={`Review (${currentIndex + 1}/${total})`}
        showBack
        onBackPress={() => navigation.goBack()}
        rightAction={
          <TouchableOpacity
            onPress={() => setLang((l) => (l === 'en' ? 'hi' : 'en'))}
            style={styles.langToggle}
          >
            <AppText variant="caption" bold color={colors.dark.primary}>
              {lang === 'en' ? 'हिन्दी' : 'EN'}
            </AppText>
          </TouchableOpacity>
        }
      />

      <ScreenContainer scrollable contentContainerStyle={styles.container}>
        {/* Status Chip */}
        <View style={styles.statusRow}>
          <View
            style={[
              styles.statusChip,
              { backgroundColor: item.isCorrect ? colors.status.successBg : colors.status.errorBg },
            ]}
          >
            <Ionicons
              name={item.isCorrect ? 'checkmark-circle' : 'close-circle'}
              size={16}
              color={item.isCorrect ? colors.status.success : colors.status.error}
            />
            <AppText
              variant="caption"
              bold
              color={item.isCorrect ? colors.status.success : colors.status.error}
              style={{ marginLeft: 4 }}
            >
              {item.isCorrect ? 'Correct Answer (+2.0)' : 'Incorrect Answer (-0.50)'}
            </AppText>
          </View>
        </View>

        {/* Question Text */}
        <View style={styles.questionCard}>
          <AppText variant="bodyLarge" bold color={colors.text.primary} style={styles.questionText}>
            Q{item.qNum}. {lang === 'hi' ? item.questionHi : item.questionEn}
          </AppText>
        </View>

        {/* Options Review */}
        <View style={styles.optionsWrap}>
          {item.options.map((opt) => {
            const isCorrect = opt.key === item.correctAnswerKey;
            const isStudent = opt.key === item.studentAnswerKey;

            let borderColor = colors.border.light;
            let bgColor = colors.background.surface;

            if (isCorrect) {
              borderColor = colors.status.success;
              bgColor = colors.status.successBg;
            } else if (isStudent && !item.isCorrect) {
              borderColor = colors.status.error;
              bgColor = colors.status.errorBg;
            }

            return (
              <View key={opt.key} style={[styles.optionCard, { borderColor, backgroundColor: bgColor }]}>
                <View style={[styles.optKeyBadge, isCorrect && { backgroundColor: colors.status.success }]}>
                  <AppText variant="caption" bold color={isCorrect ? '#FFFFFF' : colors.dark.primary}>
                    {opt.key}
                  </AppText>
                </View>
                <AppText variant="bodyMedium" color={colors.text.primary} style={styles.optText}>
                  {lang === 'hi' ? opt.hi : opt.en}
                </AppText>
                {isCorrect && (
                  <View style={styles.correctPill}>
                    <AppText variant="caption" bold color={colors.status.success}>
                      Correct
                    </AppText>
                  </View>
                )}
                {isStudent && !isCorrect && (
                  <View style={styles.wrongPill}>
                    <AppText variant="caption" bold color={colors.status.error}>
                      Your Choice
                    </AppText>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* Detailed Explanation / Solution Box (SRS requirement) */}
        <View style={styles.explanationCard}>
          <View style={styles.expHeader}>
            <Ionicons name="bulb-outline" size={20} color={colors.dark.primary} />
            <AppText variant="h4" color={colors.dark.primary} style={{ marginLeft: 6 }}>
              Detailed Solution & Explanation
            </AppText>
          </View>
          <AppText variant="bodyMedium" color={colors.text.secondary} style={styles.expText}>
            {lang === 'hi' ? item.explanationHi : item.explanationEn}
          </AppText>
        </View>

        {/* Stepper Buttons */}
        <View style={styles.stepperRow}>
          <TouchableOpacity
            disabled={currentIndex === 0}
            onPress={() => setCurrentIndex((c) => Math.max(0, c - 1))}
            style={[styles.stepBtn, currentIndex === 0 && { opacity: 0.4 }]}
          >
            <Ionicons name="arrow-back" size={18} color={colors.dark.primary} />
            <AppText variant="buttonSmall" color={colors.dark.primary} style={{ marginLeft: 4 }}>
              Previous
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={currentIndex === total - 1}
            onPress={() => setCurrentIndex((c) => Math.min(total - 1, c + 1))}
            style={[styles.stepBtn, styles.stepBtnPrimary, currentIndex === total - 1 && { opacity: 0.4 }]}
          >
            <AppText variant="buttonSmall" bold color="#FFFFFF">
              Next Solution
            </AppText>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" style={{ marginLeft: 4 }} />
          </TouchableOpacity>
        </View>
      </ScreenContainer>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
  },
  langToggle: {
    backgroundColor: colors.pastel.yellow,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
  },
  statusRow: {
    marginBottom: spacing.xs,
  },
  statusChip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  questionCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
    marginBottom: spacing.md,
  },
  questionText: {
    lineHeight: 26,
  },
  optionsWrap: {
    marginBottom: spacing.md,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1.5,
    marginBottom: spacing.xs,
  },
  optKeyBadge: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.background.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  optText: {
    flex: 1,
  },
  correctPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  wrongPill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  explanationCard: {
    backgroundColor: colors.pastel.lavenderLight,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
    marginBottom: spacing.xl,
  },
  expHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  expText: {
    lineHeight: 24,
  },
  stepperRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  stepBtn: {
    flex: 1,
    height: 48,
    borderRadius: radius.full,
    backgroundColor: colors.background.surface,
    borderWidth: 1,
    borderColor: colors.border.light,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBtnPrimary: {
    backgroundColor: colors.dark.primary,
  },
});

export default QuestionReviewScreen;
