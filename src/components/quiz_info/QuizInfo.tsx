import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuiz } from "../../firebase_services/QuizStore";
import type { Quiz } from "../../types/quizBlueprint";
import QuestionPreview from "./QuestionPreview";
import AboutQuiz from "./AboutQuiz";
import QuizActions from "./QuizActions";
import LoadingPanel from "../loadingPanel";

export default function QuizInfo() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!quizId) return;
    setLoading(true);
    getQuiz(quizId)
      .then((result) => {
        setQuiz(result);
      })
      .finally(() => setLoading(false));
  }, [quizId]);

  const onPlay = () => {
    if (!quizId) return;
    navigate(`/play/${quizId}`);
  };

  const onHost = () => {
    if (!quizId) return;
    navigate(`/host/${quizId}`);
  };

  const onShare = async () => {
    // to be implemented
  };

  if (loading) {
    return <LoadingPanel />;
  }

  const hasQuestions =
    Array.isArray(quiz?.questions) && quiz.questions.length > 0;

  return (
    <div className="w-full max-w-full mx-auto px-10">
      <div className="h-full text-white flex">
        <div className="w-2/5 bg-neutral-900 overflow-y-auto screen-minus-header -ml-10 pl-10 mr-10">
          <div className="p-6 flex flex-col h-full">
            <AboutQuiz quiz={quiz} />

            <QuizActions onPlay={onPlay} onHost={onHost} onShare={onShare} />

            {hasQuestions && (
              <div className="mt-auto pt-6 border-t border-neutral-700 border-dashed">
                <button
                  className="py-2 text-sm text-neutral-400 hover:text-neutral-300 transition"
                  onClick={() => {
                    alert("coming soon");
                  }}
                >
                  Report mistake
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-3/5 overflow-y-auto screen-minus-header">
          <div className="p-6">
            {!hasQuestions && (
              <div className="opacity-75">No questions in this quiz.</div>
            )}

            {hasQuestions && quiz && (
              <ul className="space-y-8">
                {quiz.questions.map((q, idx) => (
                  <li key={idx}>
                    <QuestionPreview question={q} idx={idx} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
