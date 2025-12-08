import PlaceHolderImage from "../../assets/Roman_empire_map.png";
import CardDescription from "./CardDescription";

interface Props {
  title: string;
  duration: string;
  author: string;
  timeAgo: string;
  backgroundImage?: string;
  onClick?: () => void;
}

export default function Thumbnail({
  title,
  duration,
  author,
  timeAgo,
  backgroundImage,
  onClick,
}: Props) {
  return (
    <div
      className="group relative w-full aspect-4/3 rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage || PlaceHolderImage})`,
        }}
      ></div>

      <CardDescription
        title={title}
        duration={duration}
        author={author}
        timeAgo={timeAgo}
      />
    </div>
  );
}
