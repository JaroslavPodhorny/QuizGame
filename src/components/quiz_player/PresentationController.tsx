import type { Quiz } from "../../types/quizBlueprint";
import { usePresentationSession } from "../../hooks/usePresentationSession";
import IntroScreen from "./screens/IntroScreen";
import QuestionScreen from "./screens/QuestionScreen";
import ResultsScreen from "./screens/ResultsScreen";
import FinishedScreen from "./screens/FinishedScreen";
import PresentControls from "./PresentControls";

interface Props {
  quiz: Quiz;
  onExit: () => void;
}

export default function PresentationController({ quiz, onExit }: Props) {
  const {
    session,
    quizResult,
    startQuiz,
    answerQuestion,
    nextQuestion,
    resetQuiz,
  } = usePresentationSession(quiz);

  return (
    <div className="overflow-hidden text-white">
      {session.state === "intro" && (
        <IntroScreen quiz={quiz} onStart={startQuiz} onExit={onExit} />
      )}

      {session.state === "question" && (
        <QuestionScreen
          quiz={quiz}
          currentQuestionIndex={session.currentQuestionIndex}
          onAnswer={answerQuestion}
          totalQuestions={quiz.questions.length}
        />
      )}

      {session.state === "results" && (
        <ResultsScreen
          quiz={quiz}
          currentQuestionIndex={session.currentQuestionIndex}
          userAnswerIndex={
            session.userAnswers[session.currentQuestionIndex]
              ?.selectedAnswerIndex
          }
          userAnswerText={
            session.userAnswers[session.currentQuestionIndex]?.userAnswerText
          }
          onContinue={nextQuestion}
          isLastQuestion={
            session.currentQuestionIndex === quiz.questions.length - 1
          }
        />
      )}

      {session.state === "finished" && quizResult && (
        <FinishedScreen
          quizResult={quizResult}
          onRetry={() => {
            resetQuiz();
            startQuiz();
          }}
          onExit={onExit}
        />
      )}

      <PresentControls clickBack={resetQuiz} clickForward={nextQuestion} />
    </div>
  );
}
