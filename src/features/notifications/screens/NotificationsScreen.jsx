import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, shadows } from '../../../theme';
import AppText from '../../../components/common/AppText';
import ScreenContainer from '../../../components/layout/ScreenContainer';
import AppHeader from '../../../components/common/AppHeader';

const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    title: 'All India Mock Exam 04 is Live!',
    message: 'National ranking test series window is now open. Test closes tomorrow at 9:00 PM.',
    time: '15m ago',
    type: 'exam',
    unread: true,
    icon: 'document-text',
    bgColor: colors.pastel.yellow,
    iconColor: '#D97706',
  },
  {
    id: '2',
    title: 'Daily Streak Milestone! 🔥',
    message: 'Awesome work, Rahul! You have completed a 5-day continuous quiz streak. Keep going!',
    time: '2h ago',
    type: 'streak',
    unread: true,
    icon: 'flame',
    bgColor: colors.pastel.peach,
    iconColor: '#EA580C',
  },
  {
    id: '3',
    title: 'Detailed Solution Available',
    message: 'In-depth bilingual solutions and peer ranking for General Studies Quiz #12 are published.',
    time: '1d ago',
    type: 'result',
    unread: false,
    icon: 'checkmark-circle',
    bgColor: colors.pastel.mint,
    iconColor: '#059669',
  },
  {
    id: '4',
    title: 'Pro Membership Active',
    message: 'Your 3-Month Pro Exam Pass has been successfully verified. Enjoy unlimited full-length mocks!',
    time: '3d ago',
    type: 'sub',
    unread: false,
    icon: 'diamond',
    bgColor: colors.pastel.lavender,
    iconColor: '#7C3AED',
  },
];

const NotificationsScreen = ({ navigation }) => {
  const [filter, setFilter] = useState('all');
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const filteredData = filter === 'unread' 
    ? notifications.filter(n => n.unread)
    : notifications;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <ScreenContainer scrollable={false} backgroundColor={colors.background.primary}>
      <AppHeader
        title="Notifications"
        showBack={true}
        onBackPress={() => navigation && navigation.goBack && navigation.goBack()}
        rightIcon="checkmark-done-outline"
        onRightPress={markAllRead}
      />

      {/* Filter Tabs */}
      <View style={styles.tabContainer}>
        {['all', 'unread'].map((tab) => {
          const isActive = filter === tab;
          const label = tab === 'all' ? 'All Updates' : 'Unread Only';
          return (
            <TouchableOpacity
              key={tab}
              activeOpacity={0.8}
              style={[styles.tabPill, isActive && styles.activeTabPill]}
              onPress={() => setFilter(tab)}
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

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.85}
            style={[
              styles.notificationCard,
              item.unread && styles.unreadBorder,
            ]}
          >
            <View style={[styles.iconWrapper, { backgroundColor: item.bgColor }]}>
              <Ionicons name={item.icon} size={22} color={item.iconColor} />
            </View>

            <View style={styles.cardContent}>
              <View style={styles.titleRow}>
                <AppText variant="bodyMedium" weight="bold" style={{ flex: 1 }}>
                  {item.title}
                </AppText>
                {item.unread && <View style={styles.unreadDot} />}
              </View>

              <AppText variant="caption" color={colors.text.secondary} style={styles.messageText}>
                {item.message}
              </AppText>

              <AppText variant="caption" color={colors.text.tertiary} style={{ marginTop: 4 }}>
                {item.time}
              </AppText>
            </View>
          </TouchableOpacity>
        )}
      />
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
  listContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 100,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: colors.background.surface,
    borderRadius: radius.xxl,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.sm,
  },
  unreadBorder: {
    borderColor: colors.pastel.lavenderDark,
    backgroundColor: '#FCFBFF',
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  cardContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7C3AED',
    marginLeft: 6,
  },
  messageText: {
    lineHeight: 18,
  },
});

export default NotificationsScreen;
