import type { Quiz } from "../../../types/quizBlueprint";
import MultipleChoiceQuestion from "./question_types/MultipleChoiceQuestion";
import TrueFalseQuestion from "./question_types/TrueFalseQuestion";
import FillInTheBlankQuestion from "./question_types/FillInTheBlankQuestion";
import { motion } from "framer-motion";

interface ResultsScreenProps {
  quiz: Quiz;
  currentQuestionIndex: number;
  userAnswerIndex: number;
  onContinue: () => void;
  isLastQuestion: boolean;
  userAnswerText?: string;
}

export default function ResultsScreen({
  quiz,
  currentQuestionIndex,
  userAnswerIndex,
  onContinue,
  isLastQuestion,
  userAnswerText,
}: ResultsScreenProps) {
  const question = quiz.questions[currentQuestionIndex];
  const isCorrect = userAnswerIndex === question.correctAnswerIndex;

  return (
    <div className="w-full screen-minus-header flex flex-col p-6 md:p-12">
      <div className="mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="text-center mb-6"
        >
          <div
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-2xl shadow-xl ${
              isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            <span className="text-4xl">{isCorrect ? "✓" : "✗"}</span>
            <span>{isCorrect ? "Correct!" : "Incorrect"}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            {question.title}
          </h2>
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col gap-6 justify-center">
        <div className="mt-4 flex justify-center">
          {question.type === "Multiple choice" && (
            <MultipleChoiceQuestion
              question={question}
              onAnswer={() => {}}
              disabled={true}
              userAnswerIndex={userAnswerIndex}
              showCorrectAnswer={true}
            />
          )}
          {question.type === "True/False" && (
            <TrueFalseQuestion
              question={question}
              onAnswer={() => {}}
              disabled={true}
              userAnswerIndex={userAnswerIndex}
              showCorrectAnswer={true}
            />
          )}
          {question.type === "Fill in the blank" && (
            <FillInTheBlankQuestion
              question={question}
              onAnswer={() => {}}
              disabled={true}
              userAnswerIndex={userAnswerIndex}
              showCorrectAnswer={true}
              userAnswerText={
                userAnswerText || question.answers[userAnswerIndex]
              }
            />
          )}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button
            className="bg-primary hover:bg-primary/80 hover:text-white/80 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-colors"
            onClick={onContinue}
          >
            {isLastQuestion ? "See Results" : "Next Question"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
