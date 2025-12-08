import type { Question } from "../../../../types/quizBlueprint";
import { motion } from "framer-motion";

interface TrueFalseQuestionProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
  disabled: boolean;
  userAnswerIndex?: number;
  showCorrectAnswer?: boolean;
}

export default function TrueFalseQuestion({
  question,
  onAnswer,
  disabled,
  userAnswerIndex,
  showCorrectAnswer = false,
}: TrueFalseQuestionProps) {
  const getButtonStyles = (
    index: number,
    baseColor: string,
    hoverColor: string
  ) => {
    if (!showCorrectAnswer) {
      return `${baseColor} ${
        !disabled ? hoverColor : "opacity-75 cursor-not-allowed"
      } p-8 rounded-xl text-white font-bold text-2xl flex flex-col items-center gap-4 transition-colors shadow-lg`;
    }

    const isCorrect = index === question.correctAnswerIndex;
    const isUserAnswer = index === userAnswerIndex;

    if (isCorrect) {
      return "bg-green-500 p-8 rounded-xl text-white font-bold text-2xl flex flex-col items-center gap-4 shadow-lg border-4 border-green-300";
    } else if (isUserAnswer) {
      return "bg-red-500 p-8 rounded-xl text-white font-bold text-2xl flex flex-col items-center gap-4 shadow-lg border-4 border-red-300 opacity-75";
    } else {
      return `${baseColor} p-8 rounded-xl text-white font-bold text-2xl flex flex-col items-center gap-4 opacity-50 shadow-lg`;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
      <motion.button
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: "backOut",
        }}
        whileHover={
          !disabled && !showCorrectAnswer
            ? { scale: 1.05, y: -8, rotate: 2 }
            : {}
        }
        whileTap={!disabled && !showCorrectAnswer ? { scale: 0.95 } : {}}
        className={getButtonStyles(0, "bg-green-500", "hover:bg-green-600")}
        onClick={() => !disabled && onAnswer(0)}
        disabled={disabled}
      >
        <span className="text-5xl font-bold bg-white/20 w-20 h-20 rounded-full flex items-center justify-center">
          T
        </span>
        <span>True</span>
        {showCorrectAnswer && 0 === question.correctAnswerIndex && (
          <span className="text-3xl">✓</span>
        )}
        {showCorrectAnswer &&
          0 === userAnswerIndex &&
          0 !== question.correctAnswerIndex && (
            <span className="text-3xl">✗</span>
          )}
      </motion.button>
      <motion.button
        initial={{ scale: 0, opacity: 0, rotate: 180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "backOut",
        }}
        whileHover={
          !disabled && !showCorrectAnswer
            ? { scale: 1.05, y: -8, rotate: -2 }
            : {}
        }
        whileTap={!disabled && !showCorrectAnswer ? { scale: 0.95 } : {}}
        className={getButtonStyles(1, "bg-red-500", "hover:bg-red-600")}
        onClick={() => !disabled && onAnswer(1)}
        disabled={disabled}
      >
        <span className="text-5xl font-bold bg-white/20 w-20 h-20 rounded-full flex items-center justify-center">
          F
        </span>
        <span>False</span>
        {showCorrectAnswer && 1 === question.correctAnswerIndex && (
          <span className="text-3xl">✓</span>
        )}
        {showCorrectAnswer &&
          1 === userAnswerIndex &&
          1 !== question.correctAnswerIndex && (
            <span className="text-3xl">✗</span>
          )}
      </motion.button>
    </div>
  );
}
