import { useState, useEffect } from "react";
import MultipleChButton from "../MultipleChButton";

interface Props {
  onAnswersChange: (answers: string[]) => void;
  answers: string[];
  onCurrentIndexChange?: (index: number) => void;
}

export default function MultipleChoice({
  onAnswersChange,
  answers,
  onCurrentIndexChange,
}: Props) {
  // updates specific answer based on index
  const updateAnswer = (index: number) => (value: string) => {
    const next = [...answers];
    next[index] = value;
    onAnswersChange(next);
  };

  const [correctIndex, setCorrectIndex] = useState<number>(0);

  useEffect(() => {
    onCurrentIndexChange?.(correctIndex);
  }, [correctIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <MultipleChButton
        index={0}
        onChange={updateAnswer(0)}
        value={answers[0]}
        autoFocus
        correct={correctIndex === 0}
        setCorrect={() => setCorrectIndex(0)}
      />
      <MultipleChButton
        index={1}
        onChange={updateAnswer(1)}
        value={answers[1]}
        correct={correctIndex === 1}
        setCorrect={() => setCorrectIndex(1)}
      />
      <MultipleChButton
        index={2}
        onChange={updateAnswer(2)}
        value={answers[2]}
        correct={correctIndex === 2}
        setCorrect={() => setCorrectIndex(2)}
      />
      <MultipleChButton
        index={3}
        onChange={updateAnswer(3)}
        value={answers[3]}
        correct={correctIndex === 3}
        setCorrect={() => setCorrectIndex(3)}
      />
    </div>
  );
}
