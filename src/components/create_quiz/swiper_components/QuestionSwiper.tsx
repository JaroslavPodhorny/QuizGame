import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

import QuestionForm from "../QuestionForm";
import AddQuestion from "../AddQuestion";

import type { Question, QuestionType } from "../../../types/quizBlueprint";

type Props = {
  questions: Question[];
  onSwiper: (swiper: SwiperType) => void;
  onSlideChange: (activeIndex: number) => void;
  onAnswersChange: (index: number, answers: any[]) => void;
  onTitleChange: (index: number, title: string) => void;
  onTypeChange: (index: number, type: QuestionType) => void;
  onCorrectIndexChange: (index: number, correctIndex: number) => void;
  addQuestion: () => void;
  className?: string;
};

export default function QuestionSwiper({
  questions,
  onSwiper,
  onSlideChange,
  onAnswersChange,
  onTitleChange,
  onTypeChange,
  onCorrectIndexChange,
  addQuestion,
  className,
}: Props) {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      speed={200}
      mousewheel={{ forceToAxis: true, sensitivity: 1 }}
      keyboard={{ enabled: true }}
      modules={[Keyboard, Mousewheel]}
      onSwiper={onSwiper}
      onSlideChange={(s) => onSlideChange(s.activeIndex)}
      className={className ?? "h-[75vh] sm:h-[70vh] md:h-[70vh]"}
    >
      {questions.map((question, index) => (
        <SwiperSlide key={index}>
          <QuestionForm
            onAnswersChange={(answers: any[]) =>
              onAnswersChange(index, answers)
            }
            onTitleChange={(title: string) => onTitleChange(index, title)}
            onTypeChange={(type: QuestionType) => onTypeChange(index, type)}
            onCorrectIndexChange={(correctIndex: number) =>
              onCorrectIndexChange(index, correctIndex)
            }
            type={question.type}
          />
        </SwiperSlide>
      ))}

      <SwiperSlide key="add-new">
        <AddQuestion addQuestion={addQuestion} />
      </SwiperSlide>
    </Swiper>
  );
}
