interface Props {
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  setCorrect: () => void;
  correct: boolean;
  index?: number;
}

function GetColor(index: number) {
  const colors = ["#A22121", "#A38300", "#2628BA", "#177328"];
  return colors[index % colors.length];
}

function GetPlaceholder(index: number) {
  const placeholders = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return placeholders[index % placeholders.length];
}

export default function MultipleChButton({
  autoFocus = false,
  value = "",
  correct,
  index,
  setCorrect,
  onChange,
}: Props) {
  return (
    <div
      className={`group flex bg-gray-800 rounded-xl overflow-hidden caret-white text-sm ${
        index !== undefined ? GetColor(index) : ""
      } transition-colors duration-300 focus-within:ring-2 focus-within:ring-blue-500/40`}
    >
      <input
        type="text"
        className={`bg-transparent outline-none caret-white px-3 py-6 md:py-10 flex-1 transition-colors duration-300 placeholder:text-gray-200 text-xl placeholder:italic focus:placeholder:text-transparent`}
        style={index !== undefined ? { backgroundColor: GetColor(index) } : {}}
        placeholder={index !== undefined ? GetPlaceholder(index) : "option"}
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />

      <button
        className={`relative overflow-hidden rounded-r-2xl transition-all duration-300 ease-out text-white
        ${
          correct
            ? "bg-success w-24 pointer-events-none"
            : "bg-warning w-12 hover:bg-warning/90 active:scale-95"
        }
      `}
        onClick={!correct ? () => setCorrect() : undefined}
        aria-pressed={correct}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300
        ${
          correct
            ? "opacity-0 scale-75 translate-y-1"
            : "opacity-100 scale-100 translate-y-0"
        }
        `}
        >
          X
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300
        ${
          correct
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-125 -translate-y-1"
        }
        `}
        >
          ✓
        </span>
      </button>
    </div>
  );
}
