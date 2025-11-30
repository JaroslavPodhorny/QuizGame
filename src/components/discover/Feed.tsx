import Thumbnail from "../quiz_thumbnail/Thumbnail";
import type { QuizMetadata } from "../../types/quiz.tsx";
import { getTimeAgo } from "../../utility_functions/Utility.tsx";
import { useNavigate } from "react-router-dom";

interface Props {
  handleScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  quizData: QuizMetadata[];
  isLoading?: boolean;
  hasMore?: boolean;
}

export default function Feed({ handleScroll, quizData, isLoading }: Props) {
  const navigate = useNavigate();
  return (
    <div className="relative h-full flex flex-col">
      <div
        className="flex-1 overflow-y-auto border rounded-4xl border-transparent 
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-primary/80
        [&::-webkit-scrollbar-thumb]:rounded-full 
        [&::-webkit-scrollbar-thumb]:hover:bg-gray-500"
        onScroll={handleScroll}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 relative justify-items-center">
          {quizData.map((quiz) => (
            <Thumbnail
              key={quiz.id}
              title={quiz.title}
              duration={quiz.duration ? quiz.duration : "10 mins"}
              author={quiz.createdBy || "Unknown"}
              timeAgo={getTimeAgo(quiz.createdAt)}
              onClick={() => {
                navigate(`/${quiz.id}`); // Prozatim naviguje na editaci kvízu
              }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
        {isLoading && (
          <div className="text-white mt-4 text-center relative z-10">
            Loading more quizzes...
          </div>
        )}
      </div>
    </div>
  );
}
