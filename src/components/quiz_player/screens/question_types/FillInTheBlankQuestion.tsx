import { useState } from "react";
import type { Question } from "../../../../types/quizBlueprint";

interface FillInTheBlankQuestionProps {
  question: Question;
  onAnswer: (answerIndex: number, userAnswerText?: string) => void;
  disabled: boolean;
  userAnswerIndex?: number;
  showCorrectAnswer?: boolean;
  userAnswerText?: string;
}

export default function FillInTheBlankQuestion({
  question,
  onAnswer,
  disabled,
  userAnswerIndex,
  showCorrectAnswer = false,
  userAnswerText = "",
}: FillInTheBlankQuestionProps) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      const correctAnswer = question.answers[0]?.toString().toLowerCase() || "";
      const userAnswer = userInput.toLowerCase();
      const answerIndex = userAnswer === correctAnswer ? 0 : 1;
      onAnswer(answerIndex, userInput.trim());
    }
  };

  if (showCorrectAnswer) {
    const isCorrect = userAnswerIndex === 0;
    return (
      <div className="w-full max-w-md mx-auto flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-white text-sm">Your Answer:</div>
          <div
            className={`px-4 py-3 text-lg rounded ${
              isCorrect
                ? "bg-green-600 border-2 border-green-500"
                : "bg-red-600 border-2 border-red-500"
            } text-white flex items-center justify-between`}
          >
            <span>{userAnswerText}</span>
            <span>{isCorrect ? "✓" : "✗"}</span>
          </div>
        </div>

        {!isCorrect && (
          <div className="flex flex-col gap-2">
            <div className="text-white text-sm">Correct Answer:</div>
            <div className="px-4 py-3 text-lg rounded bg-green-600 border-2 border-green-500 text-white flex items-center justify-between">
              <span>{question.answers[0]}</span>
              <span>✓</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          className="w-full px-4 py-5 text-lg rounded-t-xl bg-white/10 text-white placeholder-white/60 focus:outline-none caret-white"
          placeholder="Type your answer here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={disabled}
          autoFocus
        />
        <button
          type="submit"
          className={`px-6 py-3 hover:scale-105 hover:rounded-xl transition-all bg-primary font-bold text-lg rounded-b-xl border-white ${
            disabled || !userInput.trim() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={disabled || !userInput.trim()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
