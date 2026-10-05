/**
 * src/features/quizzes/types/quiz.types.ts
 */

import { Language } from '../../../types/common.types';

export type QuestionType = 'single_choice' | 'multiple_choice' | 'true_false';

export interface QuestionOptionItem {
  id: string | number;
  optionKey: 'A' | 'B' | 'C' | 'D' | 'E';
  textEn: string;
  textHi: string;
  image?: string;
}

export interface QuizQuestion {
  id: string | number;
  sectionId: string | number;
  questionType: QuestionType;
  questionEn: string;
  questionHi: string;
  explanationEn?: string;
  explanationHi?: string;
  marks: number;
  negativeMarks: number;
  image?: string;
  options: QuestionOptionItem[];
}

export interface QuizSection {
  id: string | number;
  name: string;
  questionCount: number;
  marks: number;
  negativeMarks: number;
  sortOrder: number;
}

export interface QuizItem {
  id: string | number;
  categoryId: string | number;
  categoryName?: string;
  title: string;
  description: string;
  durationMinutes: number;
  totalMarks: number;
  passingMarks: number;
  questionsCount: number;
  sections: QuizSection[];
  isLocked?: boolean;
}
