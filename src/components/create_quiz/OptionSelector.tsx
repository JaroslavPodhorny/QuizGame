//vytvořeno pomocí AI

interface OptionSelectorProps {
  options?: string[];
  onSelect?: (option: string) => void;
  selectedOption?: string;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  options = ["Option 1", "Option 2", "Option 3"],
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
