import MultipleChButton from "./MultipleChButton";

interface Props {
  onAnswersChange: (answers: string[]) => void;
  answers: string[];
}

export default function MultipleChoice({ onAnswersChange, answers }: Props) {
  const updateAnswer = (index: number) => (value: string) => {
    const next = [...answers];
    next[index] = value;
    onAnswersChange(next);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <MultipleChButton
        color="bg-red-600"
        placeholder="Option 1"
        onChange={updateAnswer(0)}
        value={answers[0]}
        autoFocus
      />
      <MultipleChButton
        color="bg-primary"
        placeholder="Option 2"
        onChange={updateAnswer(1)}
        value={answers[1]}
      />
      <MultipleChButton
        color="bg-green-600"
        placeholder="Option 3"
        onChange={updateAnswer(2)}
        value={answers[2]}
      />
      <MultipleChButton
        color="bg-yellow-600"
        placeholder="Option 4"
        onChange={updateAnswer(3)}
        value={answers[3]}
      />
    </div>
  );
}
