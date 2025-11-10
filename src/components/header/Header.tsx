import { useState } from "react";
import Links from "./Links";
import SignUp from "./SignUp";
import Logo from "./Logo";

interface HeaderProps {
  onCreateQuizClick?: () => void;
}

export default function Header({ onCreateQuizClick }: HeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header
      className={`bg-primary text-white mx-auto  fixed top-0 left-0 right-0 w-full z-20 transition-all duration-300 ${
        isExpanded ? "h-[50%] md:h-64" : "md:h-25 h-20"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
          <Links
            handleClick={() => handleClick()}
            isExpanded={isExpanded}
            onCreateQuizClick={onCreateQuizClick}
          />
        </div>
        <SignUp />
      </div>
    </header>
  );
}
