import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, shadows } from '../../../theme';
import AppText from '../../../components/common/AppText';
import ScreenContainer from '../../../components/layout/ScreenContainer';
import AppHeader from '../../../components/common/AppHeader';

const MOCK_TOP_THREE = [
  { id: '2', name: 'Aarav Sharma', score: '945 pts', rank: 2, avatar: '🥈', color: colors.pastel.lavender },
  { id: '1', name: 'Priya Patel', score: '980 pts', rank: 1, avatar: '👑', color: colors.pastel.yellow },
  { id: '3', name: 'Rohan Verma', score: '910 pts', rank: 3, avatar: '🥉', color: colors.pastel.mint },
];

const MOCK_LEADERBOARD = [
  { id: '4', name: 'Sneha Gupta', score: '885 pts', rank: 4, accuracy: '94%', streak: '7d' },
  { id: '5', name: 'Vikram Singh', score: '860 pts', rank: 5, accuracy: '91%', streak: '5d' },
  { id: '6', name: 'Ananya Roy', score: '840 pts', rank: 6, accuracy: '89%', streak: '12d' },
  { id: '7', name: 'Kunal Deshmukh', score: '815 pts', rank: 7, accuracy: '87%', streak: '4d' },
  { id: '8', name: 'Tanya Mehra', score: '790 pts', rank: 8, accuracy: '85%', streak: '3d' },
  { id: '9', name: 'Deepak Joshi', score: '765 pts', rank: 9, accuracy: '82%', streak: '9d' },
  { id: '10', name: 'Ritu Sen', score: '740 pts', rank: 10, accuracy: '80%', streak: '6d' },
];

const LeaderboardScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('weekly');

  return (
    <ScreenContainer scrollable={false} backgroundColor={colors.background.primary}>
      <AppHeader
        title="Leaderboard"
        showBack={false}
        rightIcon="trophy-outline"
        onRightPress={() => {}}
      />

      {/* Filter Tabs */}
      <View style={styles.tabContainer}>
        {['weekly', 'monthly', 'all_time'].map((tab) => {
          const isActive = activeTab === tab;
          const label = tab === 'weekly' ? 'This Week' : tab === 'monthly' ? 'Monthly' : 'All Time';
          return (
            <TouchableOpacity
              key={tab}
              activeOpacity={0.8}
              style={[styles.tabPill, isActive && styles.activeTabPill]}
              onPress={() => setActiveTab(tab)}
            >
              <AppText
                variant="bodySmall"
                weight={isActive ? 'bold' : 'medium'}
                color={isActive ? colors.text.inverse : colors.text.secondary}
              >
                {label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Top 3 Podium */}
        <View style={styles.podiumContainer}>
          {/* Rank 2 */}
          <View style={[styles.podiumCol, { marginTop: 32 }]}>
            <View style={[styles.podiumCard, { backgroundColor: colors.pastel.lavender }]}>
              <View style={styles.avatarCircle}>
                <AppText variant="h2">{MOCK_TOP_THREE[0].avatar}</AppText>
              </View>
              <View style={[styles.rankTag, { backgroundColor: '#7C3AED' }]}>
                <AppText variant="caption" weight="bold" color="#FFFFFF">#2</AppText>
              </View>
              <AppText variant="bodySmall" weight="bold" numberOfLines={1} align="center" style={styles.podiumName}>
                {MOCK_TOP_THREE[0].name}
              </AppText>
              <AppText variant="caption" weight="semiBold" color={colors.text.secondary}>
                {MOCK_TOP_THREE[0].score}
              </AppText>
            </View>
          </View>

          {/* Rank 1 (Center - Elevated) */}
          <View style={styles.podiumCol}>
            <View style={[styles.podiumCard, styles.championCard, { backgroundColor: colors.pastel.yellow }]}>
              <View style={styles.crownContainer}>
                <Ionicons name="sparkles" size={20} color="#D97706" />
              </View>
              <View style={[styles.avatarCircle, styles.championAvatar]}>
                <AppText variant="h1">{MOCK_TOP_THREE[1].avatar}</AppText>
              </View>
              <View style={[styles.rankTag, { backgroundColor: '#D97706' }]}>
                <AppText variant="caption" weight="bold" color="#FFFFFF">#1</AppText>
              </View>
              <AppText variant="bodyMedium" weight="bold" numberOfLines={1} align="center" style={styles.podiumName}>
                {MOCK_TOP_THREE[1].name}
              </AppText>
              <AppText variant="bodySmall" weight="bold" color="#B45309">
                {MOCK_TOP_THREE[1].score}
              </AppText>
            </View>
          </View>

          {/* Rank 3 */}
          <View style={[styles.podiumCol, { marginTop: 44 }]}>
            <View style={[styles.podiumCard, { backgroundColor: colors.pastel.mint }]}>
              <View style={styles.avatarCircle}>
                <AppText variant="h2">{MOCK_TOP_THREE[2].avatar}</AppText>
              </View>
              <View style={[styles.rankTag, { backgroundColor: '#059669' }]}>
                <AppText variant="caption" weight="bold" color="#FFFFFF">#3</AppText>
              </View>
              <AppText variant="bodySmall" weight="bold" numberOfLines={1} align="center" style={styles.podiumName}>
                {MOCK_TOP_THREE[2].name}
              </AppText>
              <AppText variant="caption" weight="semiBold" color={colors.text.secondary}>
                {MOCK_TOP_THREE[2].score}
              </AppText>
            </View>
          </View>
        </View>

        {/* User Rank Card */}
        <View style={styles.myRankCard}>
          <View style={styles.myRankBadge}>
            <AppText variant="bodySmall" weight="bold" color={colors.text.inverse}>#14</AppText>
          </View>
          <View style={styles.myRankInfo}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <AppText variant="bodyMedium" weight="bold" color={colors.text.inverse}>You (Current Rank)</AppText>
              <View style={styles.streakBadge}>
                <Ionicons name="flame" size={12} color="#EF4444" />
                <AppText variant="caption" weight="bold" color="#FFFFFF">5d streak</AppText>
              </View>
            </View>
            <AppText variant="caption" color={colors.text.inverseMuted}>Top 8% of all aspirants</AppText>
          </View>
          <AppText variant="bodyMedium" weight="bold" color={colors.pastel.yellow}>685 pts</AppText>
        </View>

        {/* List of remaining ranks */}
        <View style={styles.listSection}>
          <AppText variant="subtitle" weight="bold" style={styles.sectionHeader}>Top Contenders</AppText>
          {MOCK_LEADERBOARD.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <View style={styles.rankNumBadge}>
                <AppText variant="bodySmall" weight="bold" color={colors.text.secondary}>
                  #{item.rank}
                </AppText>
              </View>
              <View style={styles.initialsAvatar}>
                <AppText variant="bodySmall" weight="bold" color={colors.text.primary}>
                  {item.name.charAt(0)}
                </AppText>
              </View>
              <View style={styles.itemInfo}>
                <AppText variant="bodyMedium" weight="semiBold" color={colors.text.primary}>
                  {item.name}
                </AppText>
                <AppText variant="caption" color={colors.text.tertiary}>
                  Accuracy {item.accuracy} • {item.streak} streak
                </AppText>
              </View>
              <View style={styles.itemScoreBadge}>
                <AppText variant="bodySmall" weight="bold" color={colors.text.primary}>
                  {item.score}
                </AppText>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ECE8F6',
    borderRadius: radius.full,
    padding: 4,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.md,
  },
  tabPill: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabPill: {
    backgroundColor: colors.dark.primary,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 100,
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: spacing.lg,
    gap: spacing.sm,
  },
  podiumCol: {
    flex: 1,
  },
  podiumCard: {
    borderRadius: radius.xxl,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    ...shadows.sm,
  },
  championCard: {
    paddingVertical: spacing.lg,
    borderWidth: 2,
    borderColor: '#FCD34D',
    ...shadows.md,
  },
  crownContainer: {
    position: 'absolute',
    top: -12,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    ...shadows.sm,
  },
  championAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  rankTag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.full,
    marginBottom: 6,
  },
  podiumName: {
    width: '100%',
    marginBottom: 2,
  },
  myRankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.dark.primary,
    borderRadius: radius.xxl,
    padding: spacing.lg,
    marginVertical: spacing.md,
    ...shadows.md,
  },
  myRankBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  myRankInfo: {
    flex: 1,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radius.full,
    gap: 2,
  },
  listSection: {
    marginTop: spacing.md,
  },
  sectionHeader: {
    marginBottom: spacing.md,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.surface,
    padding: spacing.md,
    borderRadius: radius.xl,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  rankNumBadge: {
    width: 32,
    alignItems: 'center',
  },
  initialsAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.pastel.lavender,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.sm,
  },
  itemInfo: {
    flex: 1,
  },
  itemScoreBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.md,
    backgroundColor: colors.background.primary,
  },
});

export default LeaderboardScreen;
