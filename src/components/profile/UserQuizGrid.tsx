import { useNavigate } from "react-router-dom";
import type { QuizMetadata } from "../../types/quizBlueprint";
import Thumbnail from "../quiz_thumbnail/Thumbnail";
import { getTimeAgo } from "../../utility_functions/Utility";

interface UserQuizGridProps {
  quizzes: QuizMetadata[];
}

export default function UserQuizGrid({ quizzes }: UserQuizGridProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map((quiz) => (
        <Thumbnail
          key={quiz.id}
          title={quiz.title}
          duration={quiz.duration || "10 mins"}
          author={quiz.createdBy || "Unknown"}
          timeAgo={getTimeAgo(quiz.createdAt)}
          description={quiz.description || "No description available."}
          backgroundImage={quiz.thumbnail}
          isPublished={quiz.isPublished}
          showPrivateTag={true}
          onClick={() => navigate(`/${quiz.id}`)}
        />
      ))}
    </div>
  );
}
