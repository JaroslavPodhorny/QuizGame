interface Props {
  addQuestion: () => void;
}

export default function AddQuestion({ addQuestion }: Props) {
  return (
    <div className="h-full flex items-center justify-center py-4 sm:py-6 md:py-8 px-3 sm:px-5">
      <button
        onClick={addQuestion}
        className="group border-2 border-dashed border-gray-700 hover:border-primary rounded-xl sm:rounded-2xl w-full max-w-4xl h-[45vh] sm:h-[50vh] flex flex-col items-center justify-center gap-2 sm:gap-3 transition-colors"
        aria-label="Add new question"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800 group-hover:bg-primary/80 grid place-items-center transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 sm:w-8 sm:h-8 text-white"
          >
            <path d="M11 5a1 1 0 1 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5z" />
          </svg>
        </div>
        <span className="text-white/80 text-base sm:text-lg">Add question</span>
      </button>
    </div>
  );
}
