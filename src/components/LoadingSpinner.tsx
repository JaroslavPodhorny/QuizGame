// vytvořeno pomocí AI

interface Props {
  size?: number;
  className?: string;
}

export default function LoadingSpinner({ size = 24, className = "" }: Props) {
  const s = `${size}px`;
  return (
    <div
      className={`animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 ${className}`}
      style={{ width: s, height: s }}
    />
  );
}
