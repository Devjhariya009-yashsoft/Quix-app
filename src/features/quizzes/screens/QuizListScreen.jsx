/**
 * src/features/quizzes/screens/QuizListScreen.jsx
 */

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { ScreenContainer } from '../../../components/layout/ScreenContainer';
import { SafeAreaWrapper } from '../../../components/layout/SafeAreaWrapper';
import { AppHeader } from '../../../components/common/AppHeader';
import { AppText } from '../../../components/common/AppText';

const mockCategories = ['All Exams', 'SSC CGL', 'Banking / IBPS', 'Railway RRB', 'State PSC'];

const mockQuizzes = [
  {
    id: 101,
    title: 'SSC CGL Tier-1 Full Mock 01',
    category: 'SSC CGL',
    questions: 100,
    timeMins: 60,
    marks: 200,
    attempts: 4230,
    isFree: true,
  },
  {
    id: 102,
    title: 'Quantitative Aptitude Sectional 05',
    category: 'SSC CGL',
    questions: 25,
    timeMins: 20,
    marks: 50,
    attempts: 1890,
    isFree: false,
  },
  {
    id: 103,
    title: 'General Awareness Current Affairs Sep',
    category: 'All Exams',
    questions: 50,
    timeMins: 30,
    marks: 100,
    attempts: 6510,
    isFree: true,
  },
  {
    id: 104,
    title: 'IBPS PO Prelims Championship Mock',
    category: 'Banking / IBPS',
    questions: 100,
    timeMins: 60,
    marks: 100,
    attempts: 3120,
    isFree: false,
  },
];

export const QuizListScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All Exams');

  const filtered = selectedCategory === 'All Exams'
    ? mockQuizzes
    : mockQuizzes.filter((q) => q.category === selectedCategory);

  return (
    <SafeAreaWrapper>
      <AppHeader title="Mock Tests & Series" subtitle="Select test to practice & compete" />

      {/* Horizontal Category Filter Pills */}
      <View style={styles.categoriesWrap}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.catScroll}>
          {mockCategories.map((cat) => {
            const isSelected = cat === selectedCategory;
            return (
              <TouchableOpacity
                key={cat}
                activeOpacity={0.8}
                onPress={() => setSelectedCategory(cat)}
                style={[styles.catPill, isSelected && styles.catPillActive]}
              >
                <AppText
                  variant="caption"
                  bold
                  color={isSelected ? colors.dark.primary : colors.text.secondary}
                >
                  {cat}
                </AppText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <ScreenContainer scrollable contentContainerStyle={styles.listContainer}>
        {filtered.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.88}
            onPress={() => navigation.navigate('QuizDetails', { quizId: item.id, title: item.title })}
            style={styles.quizCard}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.badge, { backgroundColor: item.isFree ? colors.pastel.mint : colors.pastel.yellow }]}>
                <AppText variant="caption" bold color={colors.dark.primary}>
                  {item.isFree ? 'FREE MOCK' : 'PREMIUM'}
                </AppText>
              </View>
              <View style={styles.attemptsRow}>
                <Ionicons name="people-outline" size={14} color={colors.text.tertiary} />
                <AppText variant="caption" color={colors.text.secondary} style={{ marginLeft: 4 }}>
                  {item.attempts} attempts
                </AppText>
              </View>
            </View>

            <AppText variant="h4" color={colors.text.primary} style={styles.quizTitle}>
              {item.title}
            </AppText>

            <View style={styles.detailsRow}>
              <View style={styles.metaItem}>
                <Ionicons name="help-circle-outline" size={14} color={colors.text.secondary} />
                <AppText variant="caption" color={colors.text.secondary} style={{ marginLeft: 4 }}>
                  {item.questions} Qs
                </AppText>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="time-outline" size={14} color={colors.text.secondary} />
                <AppText variant="caption" color={colors.text.secondary} style={{ marginLeft: 4 }}>
                  {item.timeMins} Mins
                </AppText>
              </View>
              <View style={styles.metaItem}>
                <Ionicons name="ribbon-outline" size={14} color={colors.text.secondary} />
                <AppText variant="caption" color={colors.text.secondary} style={{ marginLeft: 4 }}>
                  {item.marks} Marks
                </AppText>
              </View>
            </View>

            <View style={styles.actionRow}>
              <AppText variant="buttonSmall" color={colors.text.brand}>
                Start Assessment
              </AppText>
              <View style={styles.arrowIcon}>
                <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScreenContainer>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  categoriesWrap: {
    paddingVertical: spacing.xs,
  },
  catScroll: {
    paddingHorizontal: spacing.xl,
    gap: spacing.xs,
  },
  catPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    backgroundColor: colors.background.surface,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  catPillActive: {
    backgroundColor: colors.pastel.lavender,
    borderColor: colors.dark.primary,
  },
  listContainer: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
  },
  quizCard: {
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.soft,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  attemptsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quizTitle: {
    marginBottom: spacing.md,
  },
  detailsRow: {
    flexDirection: 'row',
    gap: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderColor: colors.border.light,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.sm,
  },
  arrowIcon: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.dark.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QuizListScreen;
