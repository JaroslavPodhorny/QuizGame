import { useState } from "react";
import FilterByKeyword from "./FilterByKeyword";

type SearchProps = {
  handleChange?: (value: string) => void;
};

export default function Filter({ handleChange }: SearchProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-3 mt-6 text-white z-10">
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
