import Filter from "./Filter.tsx";
import QuizScroll from "./QuizScroll.tsx";
import { useEffect, useState } from "react";
import DisappearingText from "../DisappearingText.tsx";

export default function SearchSection() {
  const [scrollMode, setScrollMode] = useState(false);

  useEffect(() => {
    if (scrollMode) return;
    const onScroll = () => setScrollMode(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollMode]);

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
