import type { QuizResult } from "../../../types/presentationTypes";
import Slide from "./Slide";
import { motion } from "framer-motion";

interface FinishedScreenProps {
  quizResult: QuizResult;
  onRetry: () => void;
  onExit: () => void;
}

export default function FinishedScreen({
  quizResult,
  onRetry,
  onExit,
}: FinishedScreenProps) {
  const getScoreMessage = (percentage: number): string => {
    if (percentage === 100) return "Perfect Score";
    if (percentage >= 80) return "Good Job";
    if (percentage >= 60) return "Passed";
    if (percentage >= 40) return "Needs Work";
    return "Failed";
  };

  return (
    <Slide>
      <div className="screen-minus-header flex flex-col items-center justify-center px-8 relative">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              {getScoreMessage(quizResult.percentageScore)}
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="text-9xl font-black text-white mb-2">
              {quizResult.percentageScore}%
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-12 text-gray-400 text-xl">
              <span>
                {quizResult.correctAnswers}/{quizResult.totalQuestions} correct
              </span>
              <span>time: {quizResult.totalTimeSpent}s</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <button
              className="px-12 py-4 bg-primary font-black text-xl rounded-full hover:scale-105 transition-transform duration-200 shadow-2xl"
              onClick={onRetry}
            >
              Try Again
            </button>
            <button
              className="px-12 py-4 bg-white/10 text-white font-black text-xl rounded-full hover:bg-white/20 transition-colors duration-200"
              onClick={onExit}
            >
              Exit
            </button>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
