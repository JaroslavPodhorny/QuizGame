import { useEffect, useRef } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Popup({ isOpen, onClose, children }: PopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      popupRef.current.classList.remove("opacity-0", "scale-95");
      popupRef.current.classList.add("opacity-100", "scale-100");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center text-white caret-white"
      onClick={onClose}
    >
      <div className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300 bg-black/30" />

      <div
        ref={popupRef}
        className="relative z-10 bg-neutral-900 rounded-3xl shadow-xl max-w-2xl w-full mx-4 transition-all duration-300 opacity-0 scale-95"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-gray-700 text-4xl font-bold cursor-pointer"
          aria-label="Close popup"
        >
          &times;
        </button>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
