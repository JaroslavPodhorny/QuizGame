interface Props {
  color?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  value?: string;
}

export default function MultipleChButton({
  color,
  placeholder,
  autoFocus = false,
  onChange,
  value = "",
}: Props) {
  return (
    <input
      type="text"
      className={`bg-gray-800 px-3 sm:px-4 py-6 sm:py-8 md:py-10 rounded-xl sm:rounded-2xl caret-white text-sm sm:text-base ${color}`}
      placeholder={placeholder}
      autoFocus={autoFocus}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}
