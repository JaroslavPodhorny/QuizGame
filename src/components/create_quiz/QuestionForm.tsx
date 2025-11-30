import { useState, useEffect } from "react";
import { OptionSelector } from "./OptionSelector";
import type { QuestionType } from "../../types/quiz";

//question types components
import FillInTheBlank from "./question_types/FillInTheBlank";
import TrueFalse from "./question_types/TrueFalse";
import MultipleChoice from "./question_types/MultipleChoice";

interface Props {
  onAnswersChange: (any: any[]) => void;
  [key: string]: any;
  onTitleChange: (title: string) => void;
  onTypeChange: (type: QuestionType) => void;
  onCorrectIndexChange?: (index: number) => void;
  type: QuestionType;
}

export default function QuestionForm({
  onAnswersChange: useAnswers,
  onTitleChange,
  onTypeChange,
  onCorrectIndexChange: useCorrectAnswerIndex,
  type,
}: Props) {
  const [answers, setAnswers] = useState<any[]>(["", "", "", ""]);

  useEffect(() => {
    useAnswers(answers);
  }, [answers]);

  // console.log("Current answers state:", answers);

  return (
    <div className="my-3 md:my-6 font-regular">
      <div className="text-white flex flex-col gap-4 md:gap-6 max-w-4xl w-full mx-auto p-4 md:p-6 bg-neutral-900 rounded-3xl">
        <input
          type="text"
          placeholder="Enter question..."
          className="bg-white text-black text-lg sm:text-xl md:text-2xl p-2 sm:p-2.5 md:p-3 rounded-xl w-full caret-black"
          onChange={(e) => onTitleChange(e.target.value)}
        />
        <OptionSelector
          options={[
            "Multiple choice",
            "True/False",
            "Fill in the blank",
            "Pinpoint",
          ]}
          onSelect={onTypeChange}
          selectedOption={type}
        />

        {type === "Multiple choice" && (
          <MultipleChoice
            onAnswersChange={setAnswers}
            answers={answers}
            onCurrentIndexChange={useCorrectAnswerIndex}
          />
        )}
        {type === "True/False" && (
          <TrueFalse
            answers={(answers as unknown as boolean[]) ?? [false]}
            onAnswersChange={(a) => setAnswers(a as unknown as any[])}
          />
        )}
        {type === "Pinpoint" && (
          <div className="text-white text-base sm:text-lg">
            Pinpoint Question
          </div>
        )}
        {type === "Fill in the blank" && (
          <FillInTheBlank
            answers={(answers as unknown as string[]) ?? [""]}
            onAnswersChange={(a) => setAnswers(a as unknown as any[])}
          />
        )}
      </div>
    </div>
  );
}
