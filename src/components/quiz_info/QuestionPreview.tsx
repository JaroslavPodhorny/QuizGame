import type { Question } from "../../types/quiz";

interface Props {
  question: Question;
  idx: number;
}
export default function QuestionPreview({ question, idx }: Props) {
  return (
    <div className="flex justify-between p-3 py-10 bg-white text-black rounded-3xl text-2xl">
      <div>
        <div className="font-medium">
          {idx + 1}. {question.title || "(No title)"}
        </div>
        <div className="text-sm opacity-75">Type: {question.type}</div>
      </div>
    </div>
  );
}
