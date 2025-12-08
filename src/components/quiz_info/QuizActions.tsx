import type { FC } from "react";
import shareIcon from "../../assets/share.png";
import playIcon from "../../assets/play.png";
import hostIcon from "../../assets/host.png";

interface Props {
  onPlay: () => void;
  onHost: () => void;
  onShare: () => void;
}

const QuizActions: FC<Props> = ({ onPlay, onHost, onShare }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 font-bold text-lg sm:text-lg -mx-4 sm:mx-0 sm:-ml-4 py-6 sm:py-10">
      <button
        className="group hover:bg-blue-800 rounded-full px-8 py-4 sm:px-4 sm:py-2 transition-transform transform hover:scale-110 w-full sm:w-auto text-left sm:text-center"
        onClick={onPlay}
      >
        <img
          src={playIcon}
          alt="Play Icon"
          className="w-8 h-8 sm:w-8 sm:h-8 mr-2 inline-block filter brightness-0 invert transition-all duration-200 group-hover:scale-110"
        />
        Practice
      </button>

      <button
        className="group hover:bg-yellow-800 rounded-full px-8 py-4 sm:px-4 sm:py-2 transition-transform transform  hover:scale-110 w-full sm:w-auto text-left sm:text-center"
        onClick={onHost}
      >
        <img
          src={hostIcon}
          alt="Host Icon"
          className="w-8 h-8 sm:w-8 sm:h-8 mr-2 inline-block filter brightness-0 invert transition-all duration-200 group-hover:scale-110"
        />
        Host
      </button>

      <button
        className="group hover:bg-green-800 rounded-full px-8 py-4 sm:px-4 sm:py-2 transition-transform transform hover:scale-110 w-full sm:w-auto text-left sm:text-center"
        onClick={onShare}
      >
        <img
          src={shareIcon}
          alt="Share Icon"
          className="w-8 h-8 sm:w-8 sm:h-8 mr-2 inline-block filter brightness-0 invert transition-all duration-200 group-hover:scale-110"
        />
        Share
      </button>
    </div>
  );
};

export default QuizActions;
