import type { Swiper as SwiperType } from "swiper";

interface Props {
  totalQuestions: number;
  activeIndex: number;
  swiper: SwiperType | null;
}

export default function ProgressDots({
  totalQuestions,
  activeIndex,
  swiper,
}: Props) {
  return (
    <>
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
    </>
  );
}
