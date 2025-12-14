interface AuthDividerProps {
  text?: string;
}

export default function AuthDivider({ text = "Or" }: AuthDividerProps) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-neutral-700"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-neutral-900 text-neutral-500">{text}</span>
      </div>
    </div>
  );
}
