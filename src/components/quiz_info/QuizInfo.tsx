import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuiz } from "../../firebase_services/QuizStore";
import type { Quiz, QuizMetadata } from "../../types/quiz";
import LoadingSpinner from "../LoadingSpinner";
import QuestionPreview from "./QuestionPreview";
import OverflowContainer from "../OverflowContainer";

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

  function formatDate(d: Date | string | undefined) {
    if (!d) return "";
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleString();
  }

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
    return (
      <div
        style={{ height: "h-screen" }}
        className="flex items-center justify-center"
      >
        <LoadingSpinner />
      </div>
    );
  }

  const hasQuestions =
    Array.isArray(quiz?.questions) && quiz.questions.length > 0;

  return (
    <div className=" max-w-[1400px] mx-auto px-5 sm:px-10">
      <div className="h-full text-white flex">
        <OverflowContainer className="w-2/5 overflow-y-auto">
          <div className=" p-6 flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{quiz?.title}</h1>
            <p className="mb-4">{quiz?.description}</p>
          </div>
        </OverflowContainer>

        <OverflowContainer className="w-3/5 overflow-y-auto">
          <div className="p-6">
            {!hasQuestions && (
              <div className="opacity-75">No questions in this quiz.</div>
            )}

            {hasQuestions && quiz && (
              <ul className="space-y-3">
                {quiz.questions.map((q, idx) => (
                  <li key={idx} className="">
                    <QuestionPreview question={q} idx={idx} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </OverflowContainer>
      </div>
    </div>
  );
}
