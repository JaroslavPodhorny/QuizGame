interface Props {
  answers: string[];
  onAnswersChange: (answers: string[]) => void;
}

export default function FillInTheBlank({ answers, onAnswersChange }: Props) {
  const value = answers?.[0] ?? "";

  return (
    <input
      type="text"
      className="bg-gray-800 px-3 sm:px-4 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl caret-white text-sm sm:text-base w-full"
      placeholder="Type the correct answer..."
      value={value}
      onChange={(e) => onAnswersChange([e.target.value])}
    />
  );
}
