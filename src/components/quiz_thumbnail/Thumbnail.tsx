import PlaceHolderImage from "../../assets/roman-statue.jpeg";
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
      className="group relative w-80 h-68 md:w-100 md:h-85 rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer"
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
