//vytvořeno pomocí AI

import type { QuestionType } from "../../types/quiz";

interface OptionSelectorProps {
  options?: QuestionType[];
  onSelect?: (option: QuestionType) => void;
  selectedOption?: QuestionType;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  options = ["Multiple choice", "True/False", "Fill in the blank", "Pinpoint"],
  onSelect,
  selectedOption,
}) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect?.(option)}
          className={`flex-1 min-w-[calc(50%-0.5rem)] sm:min-w-0 py-3 md:py-4 px-3 md:px-6 rounded-full bg-neutral-800 border-2 transition-all ${
            selectedOption === option
              ? "border-primary"
              : "border-transparent hover:border-primary/50"
          }`}
        >
          <span className="text-sm sm:text-base md:text-lg">{option}</span>
        </button>
      ))}
    </div>
  );
};
