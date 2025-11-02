interface OptionSelectorProps {
  options?: string[];
  onSelect?: (option: string) => void;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  options = ["Option 1", "Option 2", "Option 3"],
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect?.(option)}
          className="flex-1 min-w-[calc(50%-0.5rem)] sm:min-w-0 py-3 sm:py-3.5 md:py-4 px-3 sm:px-4 md:px-6 rounded-xl sm:rounded-2xl bg-white/10 border-2 border-transparent hover:border-success transition-all"
        >
          <span className="text-sm sm:text-base md:text-lg">{option}</span>
        </button>
      ))}
    </div>
  );
};
