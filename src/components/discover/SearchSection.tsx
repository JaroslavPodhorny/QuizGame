import Filter from "./Filter.tsx";
import QuizScroll from "./QuizScroll.tsx";
import { useState } from "react";
import DisappearingText from "../DisappearingText.tsx";

export default function SearchSection() {
  const [scrollMode, setScrollMode] = useState(false);
  return (
    <>
      <DisappearingText isVisible={scrollMode} />
      <Filter
        handleChange={() => {
          setScrollMode(true);
        }}
      />
      <div className="overflow-hidden">
        <QuizScroll
          handleScroll={() => {
            setScrollMode(true);
          }}
        />
      </div>
    </>
  );
}
