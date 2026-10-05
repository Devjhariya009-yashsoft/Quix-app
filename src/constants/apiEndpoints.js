export const apiEndpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    sendOtp: '/auth/send-otp',
    verifyOtp: '/auth/verify-otp',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    refreshToken: '/auth/refresh-token',
    logout: '/auth/logout',
  },
  user: {
    profile: '/user/profile',
    updateProfile: '/user/profile/update',
    changePassword: '/user/change-password',
    devices: '/user/devices',
  },
  dashboard: {
    summary: '/dashboard/summary',
    featuredQuizzes: '/dashboard/featured',
  },
  quizzes: {
    categories: '/categories',
    list: '/quizzes',
    details: (id) => `/quizzes/${id}`,
    instructions: (id) => `/quizzes/${id}/instructions`,
    startAttempt: (id) => `/quizzes/${id}/attempt/start`,
    syncAttempt: (attemptId) => `/attempts/${attemptId}/sync`,
    submitAttempt: (attemptId) => `/attempts/${attemptId}/submit`,
  },
  results: {
    list: '/results',
    summary: (attemptId) => `/results/${attemptId}`,
    solutions: (attemptId) => `/results/${attemptId}/solutions`,
  },
  subscriptions: {
    plans: '/subscriptions/plans',
    mySubscription: '/subscriptions/active',
    createOrder: '/subscriptions/create-order',
    verifyPayment: '/subscriptions/verify-payment',
    history: '/subscriptions/history',
  },
  leaderboard: {
    quiz: (quizId) => `/leaderboard/quiz/${quizId}`,
    global: '/leaderboard/global',
  },
  notifications: {
    list: '/notifications',
    markRead: (id) => `/notifications/${id}/read`,
  },
};

export default apiEndpoints;
