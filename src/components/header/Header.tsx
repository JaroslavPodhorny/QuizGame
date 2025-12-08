import { useState, useRef, useEffect } from "react";
import Links from "./Links";
import SignUp from "./SignUp";
import Logo from "./Logo";

interface HeaderProps {
  onCreateQuizClick?: () => void;
}

export default function Header({ onCreateQuizClick }: HeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const height = headerRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
      className={`bg-primary text-white mx-auto fixed top-0 left-0 right-0 w-full z-20 transition-all duration-300 ${
        isExpanded ? "h-[50%] md:h-64" : "md:h-25 h-20"
      } ${isVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"}`}
      aria-label="main header"
    >
      <div className=" mx-auto px-5 md:px-10 flex justify-between items-center">
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
