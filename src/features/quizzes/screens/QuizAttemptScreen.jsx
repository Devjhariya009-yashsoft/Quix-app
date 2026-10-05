/**
 * src/features/quizzes/screens/QuizAttemptScreen.jsx
 * Flagship Exam Engine UI
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
import { AppText } from '../../../components/common/AppText';
import { QuizTimer } from '../components/QuizTimer';
import { QuestionCard } from '../components/QuestionCard';
import { QuestionOption } from '../components/QuestionOption';
import { QuestionNavigator } from '../components/QuestionNavigator';
import { SubmitQuizModal } from '../components/SubmitQuizModal';

const sampleQuestions = [
  {
    id: 1,
    sectionId: 1,
    questionType: 'single_choice',
    questionEn: 'Which of the following is known as the powerhouse of the cell?',
    questionHi: 'निम्नलिखित में से किसे कोशिका का पावरहाउस (ऊर्जा घर) कहा जाता है?',
    marks: 2,
    negativeMarks: 0.5,
    options: [
      { id: 101, optionKey: 'A', textEn: 'Ribosome', textHi: 'राइबोसोम' },
      { id: 102, optionKey: 'B', textEn: 'Mitochondria', textHi: 'माइटोकॉन्ड्रिया' },
      { id: 103, optionKey: 'C', textEn: 'Golgi Apparatus', textHi: 'गॉल्जी उपकरण' },
      { id: 104, optionKey: 'D', textEn: 'Nucleus', textHi: 'नाभिक (केंद्रक)' },
    ],
  },
  {
    id: 2,
    sectionId: 1,
    questionType: 'single_choice',
    questionEn: 'The Harappan site Lothal is situated in which of the following states?',
    questionHi: 'हड़प्पा स्थल लोथल निम्नलिखित में से किस राज्य में स्थित है?',
    marks: 2,
    negativeMarks: 0.5,
    options: [
      { id: 201, optionKey: 'A', textEn: 'Gujarat', textHi: 'गुजरात' },
      { id: 202, optionKey: 'B', textEn: 'Rajasthan', textHi: 'राजस्थान' },
      { id: 203, optionKey: 'C', textEn: 'Punjab', textHi: 'पंजाब' },
      { id: 204, optionKey: 'D', textEn: 'Haryana', textHi: 'हरियाणा' },
    ],
  },
  {
    id: 3,
    sectionId: 2,
    questionType: 'single_choice',
    questionEn: 'If a sum of money doubles itself in 5 years at simple interest, what is the annual rate of interest?',
    questionHi: 'यदि कोई धनराशि साधारण ब्याज पर 5 वर्षों में दोगुनी हो जाती है, तो वार्षिक ब्याज दर क्या है?',
    marks: 2,
    negativeMarks: 0.5,
    options: [
      { id: 301, optionKey: 'A', textEn: '15%', textHi: '15%' },
      { id: 302, optionKey: 'B', textEn: '20%', textHi: '20%' },
      { id: 303, optionKey: 'C', textEn: '25%', textHi: '25%' },
      { id: 304, optionKey: 'D', textEn: '10%', textHi: '10%' },
    ],
  },
];

export const QuizAttemptScreen = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isPaletteVisible, setIsPaletteVisible] = useState(false);
  const [isSubmitModalVisible, setIsSubmitModalVisible] = useState(false);

  const currentQuestion = sampleQuestions[currentIndex];
  const totalQuestions = sampleQuestions.length;

  const handleSelectOption = (optionId) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optionId }));
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => ({ ...prev, [currentIndex]: !prev[currentIndex] }));
  };

  const handleClearResponse = () => {
    setSelectedAnswers((prev) => {
      const updated = { ...prev };
      delete updated[currentIndex];
      return updated;
    });
  };

  const questionStatusMap = {};
  for (let i = 0; i < totalQuestions; i++) {
    if (markedForReview[i]) {
      questionStatusMap[i] = 'marked';
    } else if (selectedAnswers[i]) {
      questionStatusMap[i] = 'answered';
    } else {
      questionStatusMap[i] = 'unattempted';
    }
  }

  const answeredCount = Object.keys(selectedAnswers).length;
  const markedCount = Object.keys(markedForReview).filter((k) => markedForReview[k]).length;
  const unattemptedCount = totalQuestions - answeredCount;

  const handleFinalSubmit = () => {
    setIsSubmitModalVisible(false);
    navigation.replace('ResultSummary', {
      attemptId: 902,
      quizId: 101,
    });
  };

  return (
    <SafeAreaWrapper>
      {/* Top Test Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => setIsSubmitModalVisible(true)}
          style={styles.exitBtn}
        >
          <Ionicons name="close" size={20} color={colors.dark.primary} />
        </TouchableOpacity>

        <View style={styles.centerTitle}>
          <AppText variant="h4" color={colors.text.primary} numberOfLines={1}>
            SSC CGL Mock Test 01
          </AppText>
        </View>

        {/* Dynamic Urgency Timer */}
        <QuizTimer
          initialSeconds={3600}
          onTimeUp={() => setIsSubmitModalVisible(true)}
        />
      </View>

      <ScreenContainer scrollable withBottomPadding={false} contentContainerStyle={styles.container}>
        {/* The Bilingual Question Card */}
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          currentLanguage={currentLanguage}
          onToggleLanguage={() => setCurrentLanguage((l) => (l === 'en' ? 'hi' : 'en'))}
          sectionName={currentQuestion.sectionId === 1 ? 'General Awareness' : 'Mathematics'}
        />

        {/* Options List */}
        <View style={styles.optionsWrap}>
          {currentQuestion.options.map((opt) => (
            <QuestionOption
              key={opt.id}
              option={opt}
              isSelected={selectedAnswers[currentIndex] === opt.id}
              onSelect={() => handleSelectOption(opt.id)}
              currentLanguage={currentLanguage}
            />
          ))}
        </View>
      </ScreenContainer>

      {/* Bottom Sticky Action Controls */}
      <View style={styles.bottomControls}>
        <View style={styles.auxRow}>
          {/* Mark for review button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleToggleReview}
            style={[
              styles.reviewPill,
              markedForReview[currentIndex] && styles.reviewPillActive,
            ]}
          >
            <Ionicons
              name={markedForReview[currentIndex] ? 'bookmark' : 'bookmark-outline'}
              size={16}
              color={markedForReview[currentIndex] ? '#FFFFFF' : colors.status.review}
            />
            <AppText
              variant="caption"
              bold
              color={markedForReview[currentIndex] ? '#FFFFFF' : colors.status.review}
              style={{ marginLeft: 4 }}
            >
              {markedForReview[currentIndex] ? 'Marked' : 'Review Later'}
            </AppText>
          </TouchableOpacity>

          {/* Clear choice */}
          {selectedAnswers[currentIndex] && (
            <TouchableOpacity onPress={handleClearResponse} style={styles.clearBtn}>
              <AppText variant="caption" color={colors.text.tertiary}>
                Clear Choice
              </AppText>
            </TouchableOpacity>
          )}

          {/* Palette trigger */}
          <TouchableOpacity
            onPress={() => setIsPaletteVisible(true)}
            style={styles.paletteTrigger}
          >
            <Ionicons name="grid-outline" size={18} color={colors.dark.primary} />
            <AppText variant="caption" bold color={colors.dark.primary} style={{ marginLeft: 4 }}>
              Palette
            </AppText>
          </TouchableOpacity>
        </View>

        {/* Navigation Step Row */}
        <View style={styles.navRow}>
          <TouchableOpacity
            disabled={currentIndex === 0}
            onPress={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            style={[styles.navBtn, styles.prevBtn, currentIndex === 0 && styles.btnDisabled]}
          >
            <Ionicons name="arrow-back" size={16} color={colors.dark.primary} />
            <AppText variant="buttonSmall" color={colors.dark.primary} style={{ marginLeft: 4 }}>
              Prev
            </AppText>
          </TouchableOpacity>

          {currentIndex === totalQuestions - 1 ? (
            <TouchableOpacity
              onPress={() => setIsSubmitModalVisible(true)}
              style={[styles.navBtn, styles.submitBtn]}
            >
              <AppText variant="buttonSmall" bold color="#FFFFFF">
                Submit Test
              </AppText>
              <Ionicons name="checkmark-done" size={16} color="#FFFFFF" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
              style={[styles.navBtn, styles.nextBtn]}
            >
              <AppText variant="buttonSmall" bold color="#FFFFFF">
                Next
              </AppText>
              <Ionicons name="arrow-forward" size={16} color="#FFFFFF" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Question Palette Modal */}
      <QuestionNavigator
        visible={isPaletteVisible}
        onClose={() => setIsPaletteVisible(false)}
        totalQuestions={totalQuestions}
        currentIndex={currentIndex}
        onSelectQuestion={(idx) => setCurrentIndex(idx)}
        questionStatusMap={questionStatusMap}
        onSubmitPress={() => setIsSubmitModalVisible(true)}
      />

      {/* Confirmation Submit Modal */}
      <SubmitQuizModal
        visible={isSubmitModalVisible}
        onCancel={() => setIsSubmitModalVisible(false)}
        onConfirmSubmit={handleFinalSubmit}
        attemptedCount={answeredCount}
        unattemptedCount={unattemptedCount}
        markedCount={markedCount}
      />
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.sm,
    backgroundColor: colors.background.surface,
    borderBottomWidth: 1,
    borderColor: colors.border.light,
  },
  exitBtn: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.background.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTitle: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  container: {
    paddingBottom: 120,
    paddingTop: spacing.xs,
  },
  optionsWrap: {
    marginTop: spacing.xs,
  },
  bottomControls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background.surface,
    borderTopWidth: 1,
    borderColor: colors.border.light,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  auxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  reviewPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.status.reviewBg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  reviewPillActive: {
    backgroundColor: colors.status.review,
  },
  clearBtn: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
  paletteTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  navRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  navBtn: {
    flex: 1,
    height: 48,
    borderRadius: radius.full,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prevBtn: {
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  nextBtn: {
    backgroundColor: colors.dark.primary,
  },
  submitBtn: {
    backgroundColor: colors.status.success,
  },
  btnDisabled: {
    opacity: 0.35,
  },
});

export default QuizAttemptScreen;
