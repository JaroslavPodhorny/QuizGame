import { useEffect, useState } from "react";
import type { Quiz } from "../../../types/quizBlueprint";
import MultipleChoiceQuestion from "./question_types/MultipleChoiceQuestion";
import TrueFalseQuestion from "./question_types/TrueFalseQuestion";
import FillInTheBlankQuestion from "./question_types/FillInTheBlankQuestion";
import { motion } from "framer-motion";
import Timer from "./Timer";

interface QuestionScreenProps {
  quiz: Quiz;
  currentQuestionIndex: number;
  onAnswer: (answerIndex: number, userAnswerText?: string) => void;
  totalQuestions: number;
}

export default function QuestionScreen({
  quiz,
  currentQuestionIndex,
  onAnswer,
}: QuestionScreenProps) {
  const question = quiz.questions[currentQuestionIndex];
  const [timeLeft, setTimeLeft] = useState(30);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setTimeLeft(30);
    setAnswered(false);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (answered) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [answered]);

  const handleAnswer = (answerIndex: number, userAnswerText?: string) => {
    setAnswered(true);
    onAnswer(answerIndex, userAnswerText);
  };

  const timePercentage = (timeLeft / 30) * 100;
  const timeColor =
    timePercentage > 50 ? "green" : timePercentage > 25 ? "orange" : "red";

  return (
    <div className="w-full screen-minus-header flex flex-col p-6 md:p-12">
      <div className="">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-bold text-white text-center drop-shadow-lg">
            {question.title}
          </h2>
        </motion.div>

        <Timer
          timeLeft={timeLeft}
          timePercentage={timePercentage}
          timeColor={timeColor}
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 justify-center">
        <div className="mt-4 flex justify-center">
          {question.type === "Multiple choice" && (
            <MultipleChoiceQuestion
              question={question}
              onAnswer={handleAnswer}
              disabled={answered}
            />
          )}
          {question.type === "True/False" && (
            <TrueFalseQuestion
              question={question}
              onAnswer={handleAnswer}
              disabled={answered}
            />
          )}
          {question.type === "Fill in the blank" && (
            <FillInTheBlankQuestion
              question={question}
              onAnswer={handleAnswer}
              disabled={answered}
            />
          )}
        </div>
      </div>
    </div>
  );
}
