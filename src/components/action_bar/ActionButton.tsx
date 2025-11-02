interface Props {
  color?: string;
  children: React.ReactNode;
}

export default function ActionButton({ color, children }: Props) {
  return (
    <div className="flex items-center p-2">
      <button
        className=" text-white px-4 py-2 rounded-full transition-colors duration-300 h-15 lg:h-20 "
        style={{
          backgroundColor: color,
          boxShadow: "-4px 4px  rgba(0, 0, 0, 0.25)",
          // hover animation
        }}
      >
        <div className="flex items-center font-bold gap-2">
          {children}
          <p className="hidden lg:block">Game</p>
        </div>
      </button>
    </div>
  );
}
