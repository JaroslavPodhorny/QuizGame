//react
import { useState } from "react";
import { useParams } from "react-router-dom";

//components
import QuestionForm from "./QuestionForm";
import AddQuestion from "./AddQuestion";
import ProgressDots from "./ProgressDots";
import NavButtons from "./NavButtons";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

//firebase
import { saveQuiz } from "../../firebase_services/QuizStore";
import SaveButton from "./SaveButton";

interface Question {
  title: string;
  type: string;
  answers: any[];
  correctAnswerIndex: number;
}

export default function QuizForm() {
  const { quizId } = useParams();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [quizData, setQuizData] = useState<{ questions: Question[] }>({
    questions: [
      {
        title: "",
        type: "Multiple choice",
        answers: [],
        correctAnswerIndex: 0,
      },
    ],
  });

  const totalQuestions = quizData.questions.length;
  const totalSlides = totalQuestions + 1;

  const addQuestion = () => {
    setQuizData((prev) => ({
      questions: [
        ...prev.questions,
        {
          title: "",
          type: "Multiple choice",
          answers: [],
          correctAnswerIndex: 0,
        },
      ],
    }));
    setTimeout(() => swiper?.slideTo(totalQuestions), 0);

    //prozatimní uložení
    saveQuiz(quizId, quizData);
  };

  const updateQuestion = (index: number, field: keyof Question, value: any) => {
    setQuizData((prev) => ({
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
        <Swiper
          direction="vertical"
          slidesPerView={1}
          speed={200}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Mousewheel]}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-[75vh] sm:h-[70vh] md:h-[70vh]"
        >
          {quizData.questions.map((question, index) => (
            <SwiperSlide key={index}>
              <QuestionForm
                onAnswersChange={(answers: any[]) =>
                  updateQuestion(index, "answers", answers)
                }
                onTitleChange={(title: string) =>
                  updateQuestion(index, "title", title)
                }
                onTypeChange={(type: string) =>
                  updateQuestion(index, "type", type)
                }
                onCorrectIndexChange={(correctIndex: number) =>
                  updateQuestion(index, "correctAnswerIndex", correctIndex)
                }
                type={question.type}
              />
            </SwiperSlide>
          ))}

          <SwiperSlide key="add-new">
            <AddQuestion addQuestion={addQuestion} />
          </SwiperSlide>
        </Swiper>

        <SaveButton quizId={quizId} quizData={quizData} />
      </div>
    </div>
  );
}
