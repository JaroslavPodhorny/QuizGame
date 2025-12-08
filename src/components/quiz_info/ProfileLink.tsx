import anonymousIcon from "../../assets/user-outline.png";
import anonymousIconFull from "../../assets/user-full.png";
import type { Quiz } from "../../types/quizBlueprint";

interface Props {
  quiz: Quiz | null;
}

export default function ProfileLink({ quiz }: Props) {
  return (
    <div
      className=" flex items-center gap-3 rounded-3xl hover:bg-gray-800 cursor-pointer w-max -mx-3 px-3 -my-2 py-2"
      onMouseEnter={(e) =>
        (e.currentTarget.querySelector("img")!.src = anonymousIconFull)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.querySelector("img")!.src = anonymousIcon)
      }
    >
      <img
        src={anonymousIcon}
        className="w-8 h-8 rounded-full object-cover invert"
      />
      <div className="flex flex-col">
        <p className="font-semibold">{quiz?.createdBy}</p>
      </div>
    </div>
  );
}
