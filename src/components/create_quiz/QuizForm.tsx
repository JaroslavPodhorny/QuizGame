//react
import { useState } from "react";
import { useParams } from "react-router-dom";

import type { Question, QuestionType } from "../../types/quizBlueprint";
import { createEmptyQuestion } from "../../types/quizBlueprint";

//components
import ProgressDots from "./swiper_components/ProgressDots";
import NavButtons from "./swiper_components/NavButtons";

//swiper
import type { Swiper as SwiperType } from "swiper";
import QuestionSwiper from "./swiper_components/QuestionSwiper";

import SaveButton from "./SaveButton";

export default function QuizForm() {
  //quiz id from url
  const { quizId } = useParams();

  //swiper state
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  //main data
  const [questions, setQuestions] = useState<{ questions: Question[] }>({
    questions: [createEmptyQuestion()],
  });

  //swiper helpers
  const totalQuestions = questions.questions.length;
  const totalSlides = totalQuestions + 1;

  const addQuestion = () => {
    setQuestions((prev) => ({
      questions: [...prev.questions, createEmptyQuestion()],
    }));
    setTimeout(() => swiper?.slideTo(totalQuestions), 0);
  };

  const updateQuestion = (index: number, field: keyof Question, value: any) => {
    setQuestions((prev) => ({
      questions: prev.questions.map((q, i) =>
        i === index ? { ...q, [field]: value } : q
      ),
    }));
  };

  return (
    <div className="mt-16 sm:mt-20 md:mt-25 w-full max-w-[1400px] mx-auto px-3 sm:px-5 md:px-10 relative">
      <ProgressDots
        totalQuestions={totalQuestions}
        activeIndex={activeIndex}
        swiper={swiper}
      />

      <NavButtons
        swiper={swiper}
        activeIndex={activeIndex}
        totalSlides={totalSlides}
      />

      <div className="mt-6 sm:mt-12 md:mt-20 max-w-4xl w-full mx-auto">
        <QuestionSwiper
          questions={questions.questions}
          onSwiper={setSwiper}
          onSlideChange={(i) => setActiveIndex(i)}
          onAnswersChange={(i, answers) =>
            updateQuestion(i, "answers", answers)
          }
          onTitleChange={(i, title) => updateQuestion(i, "title", title)}
          onTypeChange={(i, type: QuestionType) =>
            updateQuestion(i, "type", type)
          }
          onCorrectIndexChange={(i, correctIndex) =>
            updateQuestion(i, "correctAnswerIndex", correctIndex)
          }
          addQuestion={addQuestion}
          className="h-[75vh] sm:h-[70vh] md:h-[70vh]"
        />

        <SaveButton quizId={quizId} quizData={questions} />
      </div>
    </div>
  );
}
