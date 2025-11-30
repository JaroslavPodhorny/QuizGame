export type QuestionType = "Multiple choice" | "True/False" | "Fill in the blank" | "Pinpoint";

export interface MultipleChoiceAnswer {
  text: string;
}

export interface Question {
  title: string;
  type: QuestionType;
  answers: any[]; 
  correctAnswerIndex?: number; 
}

export interface QuizMetadata {
  id: string;
  title: string;
  description: string;
  duration: string;
  createdBy: string;
  createdAt: Date | string;
  thumbnail?: string;
  category?: string;
  keywords?: string[];
  isPublished: boolean;
}
export interface Quiz extends QuizMetadata {
  questions: Question[];
}

export function validateQuiz(quiz: Quiz): boolean {
  if (!quiz.title || quiz.title.trim() === "") return false;
  if (!quiz.questions || quiz.questions.length === 0) return false;
  
  return quiz.questions.every((question) => {
    if (!question.title || question.title.trim() === "") return false;
    if (!question.answers || question.answers.length === 0) return false;
    return true;
  });
}

export function createEmptyQuestion(type: QuestionType = "Multiple choice"): Question {
  const baseQuestion: Question = {
    title: "",
    type,
    answers: [],
    correctAnswerIndex: 0,
  };

  switch (type) {
    case "Multiple choice":
      return { ...baseQuestion, answers: ["", "", "", ""] };
    case "True/False":
      return { ...baseQuestion, answers: [false] };
    case "Fill in the blank":
      return { ...baseQuestion, answers: [""] };
    case "Pinpoint":
      return { ...baseQuestion, answers: [] };
    default:
      return baseQuestion;
  }
}

export function createEmptyQuiz(
  id: string,
  title: string = "Untitled",
  description: string = "No description",
  duration: string = "0 mins",
  createdBy: string = "Anonymous",
  createdAt: Date | string = new Date().toISOString(),
  thumbnail: string = "",
  category: string = "General",
  keywords: string[] = [],
  isPublished: boolean = false,
  questions: Question[] = [createEmptyQuestion()]
): Quiz {
  return {
    id,
    title,
    description,
    duration,
    createdBy,
    createdAt,
    thumbnail,
    category,
    keywords,
    isPublished,
    questions,
  };
}
