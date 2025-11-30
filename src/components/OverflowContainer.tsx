//prozatimní řešení
export default function OverflowContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] ${className}`}
    >
      {children}
    </div>
  );
}
