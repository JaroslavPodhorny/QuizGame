// vytvořeno pomocí AI

interface Props {
  size?: number; // in px
  className?: string;
}

export default function LoadingSpinner({ size = 24, className = "" }: Props) {
  const s = `${size}px`;
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <svg
        style={{ width: s, height: s }}
        viewBox="0 0 50 50"
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          stroke="#cbd5e1"
          opacity="0.25"
        />
        <path fill="#fff" d="M25 5a20 20 0 1 0 20 20" opacity="0.9" />
      </svg>
    </div>
  );
}
