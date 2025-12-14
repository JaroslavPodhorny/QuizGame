import { useState } from "react";
import FilterByKeyword from "./FilterByKeyword";

type SearchProps = {
  handleChange?: (value: string) => void;
};

export default function Filter({ handleChange }: SearchProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="lg:flex lg:items-center lg:justify-between mb-3
    -mx-5 sm:-mx-10 px-5 sm:px-10 sticky text-white z-10 md:sticky top-20 md:top-25 bg-black/80 pt-4 pb-2 backdrop-blur-xl border-b border-neutral-700"
    >
      <div className="flex items-center mb-2 flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full lg:w-lg bg-white text-gray-500 p-2 rounded-full caret-black"
          autoFocus
          onChange={(e) => handleChange?.(e.target.value)}
        />
      </div>

      <FilterByKeyword
        expanded={expanded}
        onClicked={() => setExpanded(!expanded)}
      />
    </div>
  );
}
