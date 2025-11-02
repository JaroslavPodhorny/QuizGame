interface Props {
  answers: boolean[];
  onAnswersChange: (answers: boolean[]) => void;
}

export default function TrueFalse({ answers, onAnswersChange }: Props) {
  const value = Boolean(answers?.[0]);

  const setValue = (v: boolean) => onAnswersChange([v]);

  const base =
    "flex-1 py-25 px-3 md:px-6 rounded-xl border-2 transition-all text-base ";

  return (
    <div className="flex gap-3">
      <button
        type="button"
        className={`${base} ${
          value
            ? "bg-green-600 border-green-400"
            : "bg-white/10 border-transparent hover:border-white/50"
        }`}
        onClick={() => setValue(true)}
      >
        True
      </button>
      <button
        type="button"
        className={`${base} ${
          !value
            ? "bg-red-600 border-red-400"
            : "bg-white/10 border-transparent hover:border-white/50"
        }`}
        onClick={() => setValue(false)}
      >
        False
      </button>
    </div>
  );
}
