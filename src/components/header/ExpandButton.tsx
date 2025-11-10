import sort from "../../assets/sort.png";
import arrowIcon from "../../assets/arrow.svg";
import closeIcon from "../../assets/close.png";

interface Props {
  isExpanded?: boolean;
  handleClick: () => void;
}
export default function ExpandButton({ isExpanded, handleClick }: Props) {
  return (
    <>
      {/* Mobile Button */}
      <button className="lg:hidden" onClick={handleClick}>
        <img
          src={isExpanded ? closeIcon : sort}
          alt="Menu"
          className="w-6 h-6 filter invert md:w-7 md:h-7"
        />
      </button>

      {/* Desktop Button */}
      <button
        onClick={handleClick}
        aria-expanded={!!isExpanded}
        className="hidden lg:flex items-center font-bold py-2 px-4 rounded-full ml-6 duration-300 cursor-pointer group hover:rotate-12 aria-expanded:hover:-rotate-12"
      >
        <img
          src={arrowIcon}
          alt="Arrow"
          className="w-6 h-6 transition-transform duration-300 group-aria-expanded:rotate-90"
        />
      </button>
    </>
  );
}
