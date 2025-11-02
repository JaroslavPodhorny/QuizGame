import { Link } from "react-router-dom";

interface QuizPopupProps {
  onCreateClick?: () => void;
}

export default function QuizPopup({ onCreateClick }: QuizPopupProps) {
  return (
    <form>
      <h1 className="text-3xl font-bold mb-4">Create new Quiz</h1>
      <input
        type="text"
        placeholder="Quiz Title"
        className="border-2 border-primary p-2 mb-4 w-full rounded-3xl caret-black bg-white text-gray-800"
      />
      <textarea
        placeholder="Quiz Description"
        className="border-2 border-primary p-2 mb-4 w-full rounded-3xl caret-black h-24 bg-white text-gray-800"
      />
      <div className="border-2 border-dashed border-primary rounded-3xl p-8 mb-4 text-center">
        <p className="text-gray-500">Upload thumbnail</p>
      </div>

      <div className="flex justify-center">
        <Link
          to="/create-quiz"
          onClick={onCreateClick}
          className="bg-primary text-white font-black text-2xl w-1/2 rounded-3xl py-3 hover:scale-105 transition-transform duration-200 flex justify-center"
        >
          Create
        </Link>
      </div>
    </form>
  );
}
