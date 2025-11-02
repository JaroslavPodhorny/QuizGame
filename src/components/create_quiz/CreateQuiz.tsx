import { useState } from "react";
import QuestionForm from "./QuestionForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import AddQuestion from "./AddQuestion";
import NavButton from "./NavButton";

export default function CreateQuiz() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [questions, setQuestions] = useState<number[]>([0]);

  const totalQuestions = questions.length;
  const totalSlides = totalQuestions + 1;

  const addQuestion = () => {
    setQuestions((prev) => {
      const next = [...prev, prev.length];
      setTimeout(() => swiper?.slideTo(next.length - 1), 0);
      return next;
    });
  };

  return (
    <div className="mt-16 sm:mt-20 md:mt-25 w-full max-w-[1400px] mx-auto px-3 sm:px-5 md:px-10 relative">
      {/* tablet+ dots*/}
      <div className="hidden  sm:flex absolute left-4 sm:left-6 md:left-10 top-[50vh] -translate-y-1/2 flex-col items-center gap-2 md:gap-3 z-10 max-h-[60vh] overflow-y-auto ">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <button
            key={i}
            onClick={() => swiper?.slideTo(i)}
            className={`rounded-full transition-all ${
              i === activeIndex
                ? "h-6 w-1.5 sm:h-8 sm:w-2 bg-primary"
                : "h-1.5 w-1.5 sm:h-2 sm:w-2 bg-gray-700 hover:bg-gray-600"
            }`}
            aria-label={`Go to question ${i + 1}`}
          />
        ))}
      </div>

      {/* Mobile dots*/}
      <div className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <button
            key={i}
            onClick={() => swiper?.slideTo(i)}
            className={`rounded-full transition-all ${
              i === activeIndex ? "h-2 w-6 bg-primary" : "h-2 w-2 bg-gray-700"
            }`}
            aria-label={`Go to question ${i + 1}`}
          />
        ))}
      </div>

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
          {questions.map((qid) => (
            <SwiperSlide key={qid}>
              <QuestionForm />
            </SwiperSlide>
          ))}

          <SwiperSlide key="add-new">
            <AddQuestion addQuestion={addQuestion} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="absolute right-4 sm:right-6 md:right-10 top-[50vh] -translate-y-1/2 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-white z-10">
        <NavButton
          swiper={swiper}
          activeIndex={activeIndex}
          direction="up"
          totalSlides={totalSlides}
        />

        <div className="text-xs sm:text-sm md:text-base opacity-80 text-center tabular-nums font-medium">
          {Math.min(activeIndex + 1, totalQuestions)} / {totalQuestions}
        </div>

        <NavButton
          swiper={swiper}
          activeIndex={activeIndex}
          direction="down"
          totalSlides={totalSlides}
        />
      </div>
    </div>
  );
}
