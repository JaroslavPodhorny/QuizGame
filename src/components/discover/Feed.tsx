import Thumbnail from "../quiz_thumbnail/Thumbnail";
import type { QuizMetadata } from "../../types/quizBlueprint.ts";
import { getTimeAgo } from "../../utility_functions/Utility.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  handleScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  quizData: QuizMetadata[];
  isLoading?: boolean;
  hasMore?: boolean;
}

export default function Feed({ handleScroll, quizData, isLoading }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    //vytvořeno pomocí ai
    if (!handleScroll) return;

    const onWindowScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const syntheticEvent = {
        currentTarget: {
          scrollTop,
          scrollHeight,
          clientHeight,
        },
      } as unknown as React.UIEvent<HTMLDivElement>;

      handleScroll(syntheticEvent);
    };

    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [handleScroll]);

  return (
    <div onScroll={handleScroll}>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 relative justify-items-center md:p-6">
        {quizData.map((quiz) => (
          <Thumbnail
            key={quiz.id}
            title={quiz.title}
            duration={quiz.duration ? quiz.duration : "10 mins"}
            author={quiz.createdBy || "Unknown"}
            timeAgo={getTimeAgo(quiz.createdAt)}
            onClick={() => {
              navigate(`/${quiz.id}`);
            }}
          />
        ))}
      </div>
      <div className="fixed bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
      {isLoading && (
        <div className="text-white mt-4 text-center relative z-10">
          Loading more quizzes...
        </div>
      )}
    </div>
  );
}
