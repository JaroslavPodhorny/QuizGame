import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuiz } from "../../firebase_services/QuizStore";
import PresentationController from "./PresentationController";
import type { Quiz } from "../../types/quizBlueprint";
import LoadingPanel from "../loadingPanel";

export default function QuizPlayer() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadQuiz() {
      try {
        setLoading(true);
        const quizData = await getQuiz(quizId || "");
        if (!quizData) {
          setError("Quiz not found");
        } else {
          setQuiz(quizData);
        }
      } catch (err) {
        setError("Failed to load quiz");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadQuiz();
  }, [quizId]);

  const handleExit = () => {
    navigate("/discover");
  };

  if (loading) {
    return <LoadingPanel />;
  }

  if (error || !quiz) {
    return (
      <button
        className="px-8 py-3  text-white font-bold text-lg rounded-lg"
        onClick={handleExit}
      >
        Back to Discover
      </button>
    );
  }

  return <PresentationController quiz={quiz} onExit={handleExit} />;
}
