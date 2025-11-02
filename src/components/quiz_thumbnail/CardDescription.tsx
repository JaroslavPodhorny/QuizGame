import Watch from "../../assets/Watch.svg";
import User from "../../assets/user.png";

export default function CardDescription() {
  return (
    <div className="absolute bottom-0 w-full backdrop-blur-md bg-primary/80 hover:bg-primary text-white rounded-b-4xl rounded-t-2xl py-3 md:py-4 px-4 sm:px-6 md:px-12">
      <h1 className="font-bold text-base sm:text-lg md:text-xl leading-tight truncate ">
        The Roman Empire
      </h1>
      <CardInfo />
      <CardCreator />
    </div>
  );
}

function CardCreator() {
  return (
    <div className="flex items-center justify-end mt-1">
      <span className="mr-2 max-w-[60%] truncate text-xs sm:text-sm md:text-base">
        Jaroslav Po..
      </span>
      <img
        src={User}
        alt="Author Icon"
        className="w-6 h-6 md:w-8 md:h-8 invert"
      />
    </div>
  );
}

function CardInfo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <img
          src={Watch}
          alt="Watch Icon"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 -m-1 sm:-m-1.5 mb-0.5"
        />
        <span>27 min</span>
      </div>
      <span>2 days ago</span>
    </div>
  );
}
