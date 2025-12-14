import type { Question } from "../../../../types/quizBlueprint";
import { motion } from "framer-motion";

interface MultipleChoiceQuestionProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  disabled: boolean;
  userAnswerIndex?: number;
  showCorrectAnswer?: boolean;
}

export default function MultipleChoiceQuestion({
  question,
  onAnswer,
  disabled,
  userAnswerIndex,
  showCorrectAnswer = false,
}: MultipleChoiceQuestionProps) {
  const colors = [
    { bg: "bg-red-500", hover: "hover:bg-red-600" },
    { bg: "bg-teal-500", hover: "hover:bg-teal-600" },
    { bg: "bg-sky-500", hover: "hover:bg-sky-600" },
    { bg: "bg-amber-500", hover: "hover:bg-amber-600" },
  ];

  const getButtonStyles = (index: number) => {
    const baseColor = colors[index % colors.length].bg;
    const baseHover = colors[index % colors.length].hover;

    if (!showCorrectAnswer) {
      return `${baseColor} ${
        !disabled ? baseHover : ""
      } p-6 rounded-xl text-white font-bold text-xl flex flex-col items-center gap-3 ${
        !disabled ? "" : "opacity-75 cursor-not-allowed"
      } shadow-lg`;
    }

    const isCorrect = index === question.correctAnswerIndex;
    const isUserAnswer = index === userAnswerIndex;

    // Keep original colors, just add outlines
    if (isCorrect) {
      return `${baseColor} p-6 rounded-xl text-white font-bold text-xl flex flex-col items-center gap-3 shadow-lg border-4 border-green-300`;
    } else if (isUserAnswer) {
      return `${baseColor} p-6 rounded-xl text-white font-bold text-xl flex flex-col items-center gap-3 shadow-lg border-4 border-red-300`;
    } else {
      return `${baseColor} p-6 rounded-xl text-white font-bold text-xl flex flex-col items-center gap-3 opacity-50 shadow-lg`;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-3xl mx-auto ">
      {question.answers.map((answer, index) => (
        <motion.button
          key={index}
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "backOut",
          }}
          className={getButtonStyles(index)}
          onClick={() => !disabled && onAnswer(index)}
          disabled={disabled}
        >
          <span className="text-3xl font-bold bg-white/20 w-14 h-14 rounded-full flex items-center justify-center">
            {String.fromCharCode(65 + index)}
          </span>
          <span className="text-center leading-tight">{answer}</span>
          {showCorrectAnswer && index === question.correctAnswerIndex && (
            <span className="text-2xl">✔</span>
          )}
          {showCorrectAnswer &&
            index === userAnswerIndex &&
            index !== question.correctAnswerIndex && (
              <span className="text-2xl">✘</span>
            )}
        </motion.button>
      ))}
    </div>
  );
}
