/**
 * src/types/common.types.ts
 */

export type Language = 'en' | 'hi';

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
