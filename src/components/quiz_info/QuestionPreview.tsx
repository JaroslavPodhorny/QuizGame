import type { Question } from "../../types/quizBlueprint";
import placeholderImage from "../../assets/roman-statue.jpeg";
import { useState } from "react";

interface Props {
  question: Question;
  idx: number;
}

export default function QuestionPreview({ question, idx }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <button
      className={`w-full flex flex-col text-left p-6 py-6 bg-neutral-900 border transition-all text-white rounded-3xl ${
        isExpanded
          ? "border-neutral-700"
          : "border-transparent hover:border-neutral-700"
      }`}
      onClick={handleClick}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <div className="opacity-75 text-sm">Question {idx + 1}</div>
          <div className="font-bold text-2xl">
            {question.title || "(No title)"}
          </div>
          <div className="text-sm opacity-75">Type: {question.type}</div>
        </div>
        <img
          src={placeholderImage}
          alt="Placeholder"
          className="w-50 aspect-video rounded-2xl object-cover"
        />
      </div>

      {isExpanded && (
        <div className="mt-4">
          <ul className="grid grid-cols-2 gap-4">
            {question.answers.map((answer, answerIdx) => (
              <li
                key={answerIdx}
                className={`p-3 bg-neutral-800 rounded-lg ${
                  answerIdx === question.correctAnswerIndex
                    ? "outline-2 outline-green-500"
                    : ""
                }`}
              >
                {typeof answer === "string" ? answer : JSON.stringify(answer)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
}
