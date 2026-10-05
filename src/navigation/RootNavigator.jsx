import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

import QuizDetailsScreen from '../features/quizzes/screens/QuizDetailsScreen';
import QuizAttemptScreen from '../features/quizzes/screens/QuizAttemptScreen';
import ResultSummaryScreen from '../features/results/screens/ResultSummaryScreen';
import QuestionReviewScreen from '../features/results/screens/QuestionReviewScreen';
import SubscriptionPlansScreen from '../features/subscriptions/screens/SubscriptionPlansScreen';
import PaymentScreen from '../features/subscriptions/screens/PaymentScreen';
import NotificationsScreen from '../features/notifications/screens/NotificationsScreen';
import EditProfileScreen from '../features/profile/screens/EditProfileScreen';
import ChangePasswordScreen from '../features/profile/screens/ChangePasswordScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {/* Auth Flow */}
      <Stack.Screen name="Auth" component={AuthNavigator} />

      {/* Main Bottom Tabs Flow */}
      <Stack.Screen name="Main" component={MainNavigator} />

      {/* Quiz & Exam Engine Screens */}
      <Stack.Screen name="QuizDetails" component={QuizDetailsScreen} />
      <Stack.Screen
        name="QuizAttempt"
        component={QuizAttemptScreen}
        options={{ gestureEnabled: false }}
      />

      {/* Results & Analysis Screens */}
      <Stack.Screen name="ResultSummary" component={ResultSummaryScreen} />
      <Stack.Screen name="QuestionReview" component={QuestionReviewScreen} />

      {/* Subscription & Billing Screens */}
      <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlansScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />

      {/* Notifications */}
      <Stack.Screen name="Notifications" component={NotificationsScreen} />

      {/* Profile & Settings Sub-screens */}
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
