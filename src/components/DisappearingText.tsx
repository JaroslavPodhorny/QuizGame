interface Props {
  isVisible: boolean;
}
export default function DisappearingText({ isVisible }: Props) {
  return (
    <h1
      className={`text-4xl lg:text-7xl font-bold text-gray-850 mb-6 origin-top transition-all duration-700 ease-in-out shrink-0 ${
        isVisible
          ? "opacity-0 scale-75 max-h-0 mb-0 p-0"
          : "opacity-100 scale-100 max-h-20 mt-5 md:mt-10"
      }`}
    >
      Discover Quizzes
    </h1>
  );
}
