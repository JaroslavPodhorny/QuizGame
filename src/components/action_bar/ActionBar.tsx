import ActionButton from "./ActionButton";
import hostIcon from "../assets/hostIcon.svg";
import playIcon from "../assets/playIcon.svg";
import plusIcon from "../assets/plusIcon.svg";
export default function ActionBar() {
  return (
    <div className="flex justify-center items-center px-2 ">
      <div className="flex justify-center w-20 h-20 lg:w-25 lg:h-25 backdrop-blur-lg bg-primary/10 rounded-full mr-4">
        <img src={plusIcon} alt="Play" className="p-7" />
      </div>

      <div className="flex justify-center backdrop-blur-lg bg-primary/10 rounded-full">
        <ActionButton color="#177328">
          <img src={playIcon} alt="Play" className="h-12 w-12" />
          Join
        </ActionButton>

        <ActionButton color="#a38300">
          <img src={hostIcon} alt="Host" className="h-12 w-12" />
          Host
        </ActionButton>
      </div>
    </div>
  );
}
