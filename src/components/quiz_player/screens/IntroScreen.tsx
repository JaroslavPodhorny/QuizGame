import type { Quiz } from "../../../types/quizBlueprint";
import Slide from "./Slide";
import ProfileLink from "../../quiz_info/ProfileLink";
import watchIcon from "../../../assets/Watch.svg";

interface Props {
  quiz: Quiz;
  onStart: () => void;
  onExit: () => void;
}

export default function IntroScreen({ quiz, onStart, onExit }: Props) {
  return (
    <>
      <Slide>
        <div className="screen-minus-header flex flex-col items-center justify-center px-8 relative">
          <div className=" w-full">
            <h1 className="text-4xl md:text-9xl font-black text-white mb-16 text-center">
              {quiz.title}
            </h1>

            <div className="flex items-center justify-center gap-8 md:gap-12 text-gray-400 text-xl mb-20">
              <div className="flex items-center gap-1">
                <img src={watchIcon} alt="" className="w-6 h-6 opacity-60" />
                <span>{quiz.duration} min</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span>{quiz.questions.length} questions</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span>{quiz.category}</span>
            </div>

            <div className="flex justify-center">
              <button
                onClick={onStart}
                className="px-16 py-5 bg-primary font-black text-2xl rounded-full hover:scale-105 transition-transform duration-200 shadow-2xl"
              >
                Start Quiz
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-8 text-gray-500">
            <ProfileLink quiz={quiz} />
            <button
              onClick={onExit}
              className="text-gray-400 hover:text-white text-sm"
            >
              Exit
            </button>
          </div>
        </div>
      </Slide>
    </>
  );
}
