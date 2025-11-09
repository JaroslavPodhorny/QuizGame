import { saveQuiz } from "../../firebase_services/QuizStore";

interface Props {
  quizId: string | undefined;
  quizData: { questions: any[] };
}

export default function SaveButton({ quizId, quizData }: Props) {
  return (
    <div className="mt-6 flex justify-center">
      <button
        type="button"
        onClick={async () => {
          const success = await saveQuiz(quizId, quizData);
          if (success) {
            alert("Quiz saved successfully!");
          } else {
            alert("Failed to save quiz. Please try again.");
          }
        }}
        className="px-6 py-3 rounded-full bg-success text-white font-medium focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition disabled:opacity-50"
        disabled={
          !quizData.questions.length ||
          quizData.questions.some((q) => !q.title || !q.answers.length)
        }
      >
        Save quiz
      </button>
    </div>
  );
}
