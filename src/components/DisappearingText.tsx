interface Props {
  isVisible: boolean;
}
export default function DisappearingText({ isVisible }: Props) {
  return (
    <h1
      className={`text-4xl lg:text-7xl font-bold text-gray-850 
        transition-all duration-300 ease-in-out overflow-hidden ${
          isVisible
            ? "opacity-0 translate-y-[-20px] max-h-0 my-0"
            : "opacity-100 translate-y-0 max-h-40 mt-5 md:mt-10 mb-0"
        }`}
    >
      Discover Quizzes
    </h1>
  );
}
