/**
 * src/types/api.types.ts
 */

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  code?: string;
}

export interface ApiError {
  success: false;
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}
