import plus from "../../assets/plus.svg";

interface Props {
  keywords?: string[];
  onClicked?: () => void;
  expanded: boolean;
}

export default function FilterByKeyword({
  keywords = [
    "History",
    "Art",
    "Science",
    "Sports",
    "Movies",
    "Music",
    "Geography",
    "Literature",
  ],
  onClicked,
  expanded = false,
}: Props) {
  return (
    <div className="flex mb-2 items-center space-x-4 lg:space-x-6 text-sm">
      <ul className="flex space-x-4 lg:space-x-6">
        {keywords.map((keyword, i) => {
          const visibilityClass =
            i < 3 ? "inline-flex" : i < 6 ? "hidden xl:inline-flex " : "hidden";

          return (
            <li
              key={keyword}
              className={`${visibilityClass} cursor-pointer bg-neutral-900 rounded-full py-2 px-4 hover:scale-110 transition-transform duration-200`}
            >
              {keyword}
            </li>
          );
        })}
      </ul>

      <button
        className="flex items-center justify-center bg-neutral-900 rounded-full p-2 
    cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={onClicked}
        aria-expanded={expanded}
      >
        <img
          src={plus}
          alt="Add"
          className={`w-6 h-6 transform transition-transform duration-200 ${
            expanded ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
}
