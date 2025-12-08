import type { Quiz } from "../../types/quizBlueprint";
import placeholderImage from "../../assets/Roman_empire_map.png";
import ProfileLink from "./ProfileLink";

interface Props {
  quiz: Quiz | null;
}

export default function AboutQuiz({ quiz }: Props) {
  function formatDate(d: Date | string | undefined) {
    if (!d) return "";
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleString();
  }

  return (
    <div>
      <img
        src={placeholderImage}
        alt={quiz?.title}
        className="mb-4 w-full h-auto object-cover rounded-2xl aspect-[16/9]"
      />
      <div className="mb-2 text-sm flex gap-4 text-neutral-200">
        <p>{quiz?.duration} min</p>
        <p>{quiz?.isPublished ? "Published" : "Private"}</p>
        <p>{formatDate(quiz?.createdAt)}</p>
      </div>
      <p className="mb-4 text-xl">{quiz?.description}</p>

      <ProfileLink quiz={quiz} />
    </div>
  );
}
