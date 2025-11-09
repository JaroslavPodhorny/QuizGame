import type { Swiper as SwiperType } from "swiper";
import NavButton from "./NavButton";

interface NavButtonsProps {
  swiper: SwiperType | null;
  activeIndex: number;
  totalSlides: number;
}

export default function NavButtons({
  swiper,
  activeIndex,
  totalSlides,
}: NavButtonsProps) {
  return (
    <>
      {/* Desktop/Tablet*/}
      <div className="hidden sm:flex absolute right-4 sm:right-6 md:right-10 top-[50vh] -translate-y-1/2 flex-col items-center gap-2 sm:gap-3 md:gap-4 text-white z-10">
        <NavButton
          swiper={swiper}
          activeIndex={activeIndex}
          direction="up"
          totalSlides={totalSlides}
        />

        <div className="text-xs sm:text-sm md:text-base opacity-80 text-center tabular-nums font-medium">
          {Math.min(activeIndex + 1, totalSlides)} / {totalSlides - 1}
        </div>

        <NavButton
          swiper={swiper}
          activeIndex={activeIndex}
          direction="down"
          totalSlides={totalSlides}
        />
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden fixed bottom-12 left-1/2 -translate-x-1/2 flex-row items-center gap-4 text-white z-10">
        <NavButton
          swiper={swiper}
          activeIndex={activeIndex}
          direction="up"
          totalSlides={totalSlides}
        />

        <div className="text-xs opacity-80 text-center tabular-nums font-medium">
          {Math.min(activeIndex + 1, totalSlides)} / {totalSlides - 1}
        </div>

        <NavButton
          swiper={swiper}
          activeIndex={activeIndex}
          direction="down"
          totalSlides={totalSlides}
        />
      </div>
    </>
  );
}
