import { useState } from "react";
import { saveQuiz } from "../../firebase_services/QuizStore";
import LoadingSpinner from "../LoadingSpinner";

interface Props {
  quizId: string | undefined;
  quizData: { questions: any[] };
}

export default function SaveButton({ quizId, quizData }: Props) {
  const [loading, setLoading] = useState(false);

  const disabledCondition =
    !quizData.questions.length ||
    quizData.questions.some((q) => !q.title || !q.answers.length) ||
    loading;

  return (
    <div className="mt-6 flex justify-center">
      <button
        type="button"
        onClick={async () => {
          try {
            setLoading(true);
            const success = await saveQuiz(quizId, quizData);
            if (success) {
              alert("Quiz saved successfully!");
            } else {
              alert("Failed to save quiz. Please try again.");
            }
          } catch (err) {
            console.error("Error saving quiz:", err);
            alert("Failed to save quiz. Please try again.");
          } finally {
            setLoading(false);
          }
        }}
        className="invisible lg:visible px-6 py-3 rounded-full bg-success text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition disabled:opacity-50 flex items-center justify-center"
        disabled={disabledCondition}
      >
        {loading ? <LoadingSpinner size={18} /> : "Save quiz"}
      </button>
    </div>
  );
}
