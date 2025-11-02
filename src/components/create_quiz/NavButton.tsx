import type { Swiper as SwiperType } from "swiper";

interface Props {
  swiper: SwiperType | null;
  activeIndex: number;
  direction: "up" | "down";
  totalSlides: number;
}

export default function NavButton({
  swiper,
  activeIndex,
  direction,
  totalSlides,
}: Props) {
  const isUp = direction === "up";
  const isDisabled = isUp ? activeIndex === 0 : activeIndex === totalSlides - 1;
  const onClick = isUp ? () => swiper?.slidePrev() : () => swiper?.slideNext();
  const icon = isUp ? "↑" : activeIndex + 1 >= totalSlides - 1 ? "+" : "↓";

  const bgColor = isUp
    ? "bg-gray-800 hover:bg-gray-700"
    : "bg-primary hover:brightness-110";

  return (
    <button
      aria-label={`${isUp ? "Previous" : "Next"} question`}
      className={`${bgColor} rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className="text-xl sm:text-2xl leading-none">{icon}</span>
    </button>
  );
}
