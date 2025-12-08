import type { Question } from "./quizBlueprint";

export type PresentationState = "intro" | "question" | "answering" | "results" | "finished";

export interface UserAnswer {
  questionIndex: number;
  selectedAnswerIndex: number;
  timeSpent: number;
  isCorrect: boolean;
  userAnswerText?: string;
}

export interface PresentationSession {
  currentQuestionIndex: number;
  state: PresentationState;
  userAnswers: UserAnswer[];
  timePerQuestion: number;
  showResults: boolean;
  answeredAt?: Date;
}

export interface QuestionResult {
  question: Question;
  userAnswerIndex: number;
  isCorrect: boolean;
  correctAnswerIndex: number | undefined;
  timeSpent: number;
  userAnswerText?: string;
}

export interface QuizResult {
  quizTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  percentageScore: number;
  totalTimeSpent: number;
  questionResults: QuestionResult[];
}
