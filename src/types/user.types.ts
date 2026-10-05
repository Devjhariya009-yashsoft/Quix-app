/**
 * src/types/user.types.ts
 */

export interface User {
  id: string | number;
  fullName: string;
  email: string;
  mobile: string;
  profilePicture?: string;
  referralCode?: string;
  status: 'active' | 'blocked' | 'deleted';
  subscriptionStatus?: 'none' | 'active' | 'expired';
  activePlanName?: string;
  subscriptionEndAt?: string;
}
