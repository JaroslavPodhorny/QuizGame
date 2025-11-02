import arrowCircle from "../../assets/arrowCircle.svg";
import plus from "../../assets/Plus.svg";

type SearchProps = {
  handleChange?: () => void;
};

export default function Search({ handleChange }: SearchProps) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-2  z-10">
      <div className="flex items-center mb-3 flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-lg bg-white text-gray-500 p-2 rounded-full caret-black"
          autoFocus
          onChange={handleChange}
        />
        <button>
          <img
            src={arrowCircle}
            alt="Search"
            className="w-8 h-8 lg:w-12 lg:h-12 ml-2 hover:bg-primary rounded-full -m-1"
          />
        </button>
      </div>

      <div className="flex mb-2 items-center">
        <ul className="px-4 flex space-x-6 text lg:text-lg mr-10 ">
          <li className="cursor-pointer hover:scale-110 transition-transform duration-200">
            History
          </li>
          <li className="cursor-pointer hover:scale-110 transition-transform duration-200">
            Art
          </li>
          <li className="cursor-pointer hover:scale-110 transition-transform duration-200">
            Compsci
          </li>
        </ul>

        <button className="flex justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
          <img src={plus} alt="Add" className="w-8 h-8 mr-2" />
        </button>
      </div>
    </div>
  );
}
