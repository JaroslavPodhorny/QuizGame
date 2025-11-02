import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import FillInTheBlank from "./FillInTheBlank";

interface Props {
  type: string;
  answers: any[];
  setAnswers: (answers: any[]) => void;
}

export default function QuestionType({ type, answers, setAnswers }: Props) {
  switch (type) {
    case "Multiple choice":
      return <MultipleChoice onAnswersChange={setAnswers} answers={answers} />;
    case "True/False":
      return (
        <TrueFalse
          answers={(answers as unknown as boolean[]) ?? [false]}
          onAnswersChange={(a) => setAnswers(a as unknown as any[])}
        />
      );
    case "Pinpoint":
      return (
        <div className="text-white text-base sm:text-lg">Pinpoint Question</div>
      );
    case "Fill in the blank":
      return (
        <FillInTheBlank
          answers={(answers as unknown as string[]) ?? [""]}
          onAnswersChange={(a) => setAnswers(a as unknown as any[])}
        />
      );
    default:
      return null;
  }
}
