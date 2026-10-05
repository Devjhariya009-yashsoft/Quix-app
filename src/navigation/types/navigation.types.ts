/**
 * src/navigation/types/navigation.types.ts
 */

import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: { referralCode?: string } | undefined;
  OtpVerification: { mobile: string; purpose: 'login' | 'register' | 'forgot_password' };
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  DashboardTab: undefined;
  QuizzesTab: undefined;
  SubscriptionsTab: undefined;
  LeaderboardTab: undefined;
  ProfileTab: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  
  // Quizzes & Attempts
  QuizDetails: { quizId: string | number; title?: string };
  QuizInstructions: { quizId: string | number; title?: string };
  QuizAttempt: { quizId: string | number; attemptId?: string | number };
  
  // Results
  ResultSummary: { attemptId: string | number; quizId: string | number };
  QuestionReview: { attemptId: string | number; initialQuestionIndex?: number };
  
  // Subscriptions & Payments
  SubscriptionPlans: undefined;
  SubscriptionDetails: { planId: string | number };
  Payment: { planId: string | number; amount: number; planName: string };
  SubscriptionHistory: undefined;

  // Analytics & Notifications
  Performance: undefined;
  Notifications: undefined;

  // Profile Management
  EditProfile: undefined;
  ChangePassword: undefined;
};
