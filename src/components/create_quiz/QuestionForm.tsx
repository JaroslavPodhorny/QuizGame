import { useState } from "react";
import { OptionSelector } from "./OptionSelector";
import QuestionType from "./QuestionType";
import React from "react";

export default function QuestionForm() {
  const [type, setType] = useState("Multiple choice");

  const onTypeChange = (newType: string) => {
    setType(newType);
  };

  const [answers, setAnswers] = useState<any[]>(["", "", "", ""]);

  React.useEffect(() => {
    switch (type) {
      case "Multiple choice":
        setAnswers(["", "", "", ""]);
        break;
      case "True/False":
        setAnswers([false]);
        break;
      case "Pinpoint":
        setAnswers([]);
        break;
      case "Fill in the blank":
        setAnswers([""]);
        break;
      default:
        setAnswers([]);
        break;
    }
  }, [type]);

  console.log("Current answers state:", answers);

  return (
    <div className="my-3 sm:my-4 md:my-6 font-regular">
      <div className="text-white flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-4xl w-full mx-auto p-4 sm:p-5 md:p-6 bg-gray-900 rounded-xl sm:rounded-2xl">
        <input
          type="text"
          placeholder="Enter question..."
          className="bg-white text-black text-lg sm:text-xl md:text-2xl p-2 sm:p-2.5 md:p-3 rounded w-full caret-black"
        />
        <OptionSelector
          options={[
            "Multiple choice",
            "True/False",
            "Fill in the blank",
            "Pinpoint",
          ]}
          onSelect={onTypeChange}
        />
        <QuestionType type={type} answers={answers} setAnswers={setAnswers} />
      </div>
    </div>
  );
}
