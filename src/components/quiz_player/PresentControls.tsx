import arrowIcon from "../../assets/arrow.svg";

interface Props {
  clickBack: () => void;
  clickForward: () => void;
}
export default function PresentControls({ clickBack, clickForward }: Props) {
  return (
    <div className="fixed bottom-4 right-4 space-x-4">
      <button
        onClick={clickBack}
        className="p-6 z-50 bg-neutral-800 rounded-full border border-neutral-700 hover:border-neutral-500  transition-colors"
      >
        <img src={arrowIcon} className="rotate-180 w-5 h-5" alt="Back Arrow" />
      </button>

      <button
        onClick={clickForward}
        className="p-6 z-50 bg-neutral-800 rounded-full border border-neutral-700 hover:border-neutral-500  transition-colors"
      >
        <img src={arrowIcon} className=" w-5 h-5" alt="Forward Arrow" />
      </button>
    </div>
  );
}
