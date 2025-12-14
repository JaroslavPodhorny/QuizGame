import PlaceHolderImage from "../../assets/Roman_empire_map.png";
import CardDescription from "./CardDescription";

interface Props {
  title: string;
  duration: string;
  author: string;
  timeAgo: string;
  backgroundImage?: string;
  description: string;
  onClick?: () => void;
  isPublished?: boolean;
  showPrivateTag?: boolean;
}

export default function Thumbnail({
  title,
  duration,
  author,
  timeAgo,
  backgroundImage,
  description,
  onClick,
  isPublished = true,
  showPrivateTag = false,
}: Props) {
  return (
    <div
      className="group w-full rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden bg-neutral-900 border-neutral-700 border hover:border-white"
      onClick={onClick}
    >
      {/* Image section */}
      <div className="w-full aspect-video overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url(${backgroundImage || PlaceHolderImage})`,
          }}
        ></div>
        {showPrivateTag &&
          (isPublished ? (
            <div className="absolute top-2 right-2 bg-success/90 text-white text-xs font-bold px-3 py-1 rounded-full">
              Published
            </div>
          ) : (
            <div className="absolute top-2 right-2 bg-neutral-700/90 text-white text-xs font-bold px-3 py-1 rounded-full">
              Private
            </div>
          ))}
      </div>

      {/* Description section */}
      <CardDescription
        title={title}
        duration={duration}
        author={author}
        timeAgo={timeAgo}
        description={description}
      />
    </div>
  );
}
