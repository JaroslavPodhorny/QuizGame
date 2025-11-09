import Thumbnail from "../quiz_thumbnail/Thumbnail";

interface Props {
  handleScroll?: () => void;
}

export default function QuizScroll({ handleScroll }: Props) {
  return (
    <div className="relative h-full flex flex-col">
      <div
        className="flex-1 overflow-y-auto border rounded-4xl border-transparent 
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 
        [&::-webkit-scrollbar-thumb]:bg-gray-600 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        [&::-webkit-scrollbar-thumb]:hover:bg-gray-500"
        onScroll={handleScroll}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 relative justify-items-center">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
    </div>
  );
}
