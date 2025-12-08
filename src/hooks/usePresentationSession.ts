import { useState, useCallback, useRef, useEffect } from "react";
import type { PresentationSession, UserAnswer, QuizResult } from "../types/presentationTypes";
import type { Quiz } from "../types/quizBlueprint";

export function usePresentationSession(quiz: Quiz | null) {
  const [session, setSession] = useState<PresentationSession>({
    currentQuestionIndex: 0,
    state: "intro",
    userAnswers: [],
    timePerQuestion: 30,
    showResults: false,
    answeredAt: undefined,
  });

  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const questionStartTimeRef = useRef<number>(0);

  const startQuiz = useCallback(() => {
    setSession((prev) => ({
      ...prev,
      state: "question",
      currentQuestionIndex: 0,
      userAnswers: [],
    }));
    questionStartTimeRef.current = Date.now();
  }, []);

  const answerQuestion = useCallback(
    (answerIndex: number, userAnswerText?: string) => {
      if (!quiz) return;

      const currentQuestion = quiz.questions[session.currentQuestionIndex];
      const isCorrect = answerIndex === currentQuestion.correctAnswerIndex;
      const timeSpent = Math.round((Date.now() - questionStartTimeRef.current) / 1000);

      const newAnswer: UserAnswer = {
        questionIndex: session.currentQuestionIndex,
        selectedAnswerIndex: answerIndex,
        timeSpent,
        isCorrect,
        userAnswerText,
      };

      setSession((prev) => ({
        ...prev,
        state: "results",
        userAnswers: [...prev.userAnswers, newAnswer],
        showResults: true,
        answeredAt: new Date(),
      }));
    },
    [session.currentQuestionIndex, quiz]
  );

  const nextQuestion = useCallback(() => {
    if (!quiz) return;

    if (session.currentQuestionIndex < quiz.questions.length - 1) {
      setSession((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        state: "question",
        showResults: false,
      }));
      questionStartTimeRef.current = Date.now();
    } else {
      finishQuiz();
    }
  }, [session.currentQuestionIndex, quiz]);

  const finishQuiz = useCallback(() => {
    if (!quiz) return;

    const correctCount = session.userAnswers.filter((a) => a.isCorrect).length;
    const totalTime = session.userAnswers.reduce((sum, a) => sum + a.timeSpent, 0);
    const percentageScore = Math.round(
      (correctCount / quiz.questions.length) * 100
    );

    const questionResults = session.userAnswers.map((answer) => {
      const question = quiz.questions[answer.questionIndex];
      return {
        question,
        userAnswerIndex: answer.selectedAnswerIndex,
        isCorrect: answer.isCorrect,
        correctAnswerIndex: question.correctAnswerIndex,
        timeSpent: answer.timeSpent,
        userAnswerText: answer.userAnswerText,
      };
    });

    const result: QuizResult = {
      quizTitle: quiz.title,
      totalQuestions: quiz.questions.length,
      correctAnswers: correctCount,
      percentageScore,
      totalTimeSpent: totalTime,
      questionResults,
    };

    setQuizResult(result);
    setSession((prev) => ({
      ...prev,
      state: "finished",
    }));
  }, [quiz, session.userAnswers]);

  const resetQuiz = useCallback(() => {
    setSession({
      currentQuestionIndex: 0,
      state: "intro",
      userAnswers: [],
      timePerQuestion: 30,
      showResults: false,
      answeredAt: undefined,
    });
    setQuizResult(null);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return {
    session,
    quizResult,
    startQuiz,
    answerQuestion,
    nextQuestion,
    finishQuiz,
    resetQuiz,
  };
}
