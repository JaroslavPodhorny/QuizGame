import Watch from "../../assets/Watch.svg";
import User from "../../assets/user.png";

interface Props {
  title: string;
  duration: string;
  author: string;
  timeAgo: string;
  description: string;
}

export default function CardDescription({
  title,
  duration,
  author,
  timeAgo,
  description,
}: Props) {
  return (
    <div className="p-4 bg-neutral-900">
      <h1 className="font-bold text-lg mb-2 leading-tight line-clamp-2">
        {title}
      </h1>
      <p className="text-sm text-neutral-400 mb-3 line-clamp-2 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <CardInfo duration={duration} timeAgo={timeAgo} />
        <CardCreator author={author} />
      </div>
    </div>
  );
}

interface CardCreatorProps {
  author: string;
}

function CardCreator({ author }: CardCreatorProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-400">
      <img src={User} alt="Author Icon" className="w-5 h-5 invert opacity-70" />
      <span className="truncate max-w-[100px]" title={author}>
        {author}
      </span>
    </div>
  );
}

interface CardInfoProps {
  duration: string;
  timeAgo: string;
}

function CardInfo({ duration, timeAgo }: CardInfoProps) {
  return (
    <div className="flex items-center gap-3 text-sm text-neutral-400">
      <div className="flex items-center gap-1.5">
        <img src={Watch} alt="Watch Icon" className="w-4 h-4 opacity-70" />
        <span>{duration}</span>
      </div>
      <span>•</span>
      <span>{timeAgo}</span>
    </div>
  );
}
