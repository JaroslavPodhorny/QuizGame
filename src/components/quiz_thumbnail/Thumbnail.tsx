import PlaceHolderImage from "../../assets/roman-statue.jpeg";
import CardDescription from "./CardDescription";

export default function Thumbnail() {
  return (
    <div className="group relative w-80 h-68 md:w-100 md:h-85 rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${PlaceHolderImage})` }}
      ></div>

      <CardDescription
        title="The roman empire"
        duration="13 mins"
        author="Jaroslav Podhorný"
        timeAgo="2 days ago"
      />
    </div>
  );
}
