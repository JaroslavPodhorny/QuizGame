import DiscoverIcon from "../../assets/figma_emoji/Discover.svg";
import MyQuizesIcon from "../../assets/figma_emoji/MyQuizes.svg";
import CreateQuizIcon from "../../assets/figma_emoji/CreateQuiz.svg";
import sort from "../../assets/sort.png";
import arrowIcon from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

interface LinksProps {
  handleClick?: () => void;
  isExpanded?: boolean;
  onCreateQuizClick?: () => void;
}

export default function Links({
  handleClick,
  isExpanded,
  onCreateQuizClick,
}: LinksProps) {
  return (
    <>
      {/* Desktop Links */}
      <ul className="text-xl hidden lg:flex space-x-10">
        <MyLink icon={DiscoverIcon} route="/discover">
          Discover
        </MyLink>
        <MyLink icon={MyQuizesIcon} route="/my-quizzes">
          My Quizzes
        </MyLink>
        <MyLink
          icon={CreateQuizIcon}
          route="/create-quiz"
          onClick={onCreateQuizClick}
        >
          Create Quiz
        </MyLink>
      </ul>

      {/* Mobile Menu Links */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-20 bg-primary px-10 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="text-xl flex flex-col space-y-6">
          <MyLink icon={DiscoverIcon} route="/discover" onClick={handleClick}>
            Discover
          </MyLink>
          <MyLink icon={MyQuizesIcon} route="/my-quizzes" onClick={handleClick}>
            My Quizzes
          </MyLink>
          <MyLink
            icon={CreateQuizIcon}
            route="/create-quiz"
            onClick={() => {
              if (onCreateQuizClick) onCreateQuizClick();
              if (handleClick) handleClick();
            }}
          >
            Create Quiz
          </MyLink>
        </ul>
      </div>

      {/* Mobile Button */}
      <button className="lg:hidden" onClick={handleClick}>
        <img
          src={sort}
          alt="Menu"
          className="w-8 h-8 filter invert sm:w-10 sm:h-10 md:w-12 md:h-12"
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

interface LinkProps {
  children: React.ReactNode;
  icon: string;
  route: string;
  onClick?: () => void;
}

function MyLink({ children, icon, route, onClick }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 hover:scale-105 hover:text-blue-500 group">
      <img
        src={icon}
        alt=""
        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
      />
      <Link
        to={route}
        onClick={handleClick}
        className="transition-colors duration-300 group-hover:text-blue-500"
      >
        {children}
      </Link>
    </li>
  );
}
