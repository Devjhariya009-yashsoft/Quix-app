/**
 * src/components/layout/ScreenContainer.jsx
 */

import React from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../../theme/colors';

export const ScreenContainer = ({
  children,
  scrollable = false,
  style,
  contentContainerStyle,
  refreshing = false,
  onRefresh,
  withBottomPadding = true,
}) => {
  return (
    <View style={[styles.root, style]}>
      <StatusBar style="dark" backgroundColor="transparent" translucent={true} />

      {scrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            withBottomPadding && styles.bottomPadding,
            contentContainerStyle,
          ]}
          refreshControl={
            onRefresh ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={colors.dark.primary}
              />
            ) : undefined
          }
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.fill, withBottomPadding && styles.bottomPadding]}>
          {children}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  fill: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  bottomPadding: {
    paddingBottom: 90,
  },
});

export default ScreenContainer;
