interface Props {
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  setCorrect: () => void;
  correct: boolean;
  index?: number;
}

function GetColor(index: number) {
  const colors = ["bg-red-600", "bg-green-600", "bg-primary", "bg-yellow-600"];
  return colors[index % colors.length]; // když je index větší než počet barev, tak se to začne opakovat
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
      className={`group flex bg-gray-800 rounded-2xl overflow-hidden caret-white text-sm ${
        index !== undefined ? GetColor(index) : ""
      } transition-colors duration-300 focus-within:ring-2 focus-within:ring-blue-500/40`}
    >
      <input
        type="text"
        className={`bg-transparent outline-none caret-white px-3 py-6 md:py-10 flex-1 ${
          index !== undefined ? GetColor(index) : "bg-red-600"
        } transition-colors duration-300 placeholder:text-gray-400 focus:placeholder:text-gray-500`}
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
            : "bg-red-900 w-12 hover:bg-red-800 active:scale-95"
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
