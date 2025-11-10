import Watch from "../../assets/Watch.svg";
import User from "../../assets/user.png";

interface Props {
  title: string;
  duration: string;
  author: string;
  timeAgo: string;
}

export default function CardDescription({
  title,
  duration,
  author,
  timeAgo,
}: Props) {
  return (
    <div className="absolute bottom-0 w-full backdrop-blur-md bg-primary/80 group-hover:bg-primary transition-colors duration-300 text-white rounded-b-4xl rounded-t-2xl py-3 md:py-4 px-4 sm:px-6 md:px-12">
      <h1 className="font-bold text-lg mb-2 leading-tight truncate ">
        {title}
      </h1>
      <CardInfo duration={duration} timeAgo={timeAgo} />
      <CardCreator author={author} />
    </div>
  );
}

interface CardCreatorProps {
  author: string;
}

function CardCreator({ author }: CardCreatorProps) {
  const MAX_AUTHOR_LENGTH = 11;
  const displayAuthor =
    author.length > MAX_AUTHOR_LENGTH
      ? author.slice(0, MAX_AUTHOR_LENGTH) + "…"
      : author;

  return (
    <div className="flex items-center justify-end mt-1 opacity-70">
      <span
        className="mr-2 max-w-[60%] truncate text-xs sm:text-sm md:text-base"
        title={author}
      >
        {displayAuthor}
      </span>
      <img
        src={User}
        alt="Author Icon"
        className="w-6 h-6 md:w-8 md:h-8 invert"
      />
    </div>
  );
}

interface CardInfoProps {
  duration: string;
  timeAgo: string;
}

function CardInfo({ duration, timeAgo }: CardInfoProps) {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-xs md:text-base opacity-70">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <img
          src={Watch}
          alt="Watch Icon"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        />
        <span>{duration}</span>
      </div>
      <span>{timeAgo}</span>
    </div>
  );
}
