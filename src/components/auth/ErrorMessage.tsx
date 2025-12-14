interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-xl">
      <p className="text-red-400 text-sm text-center">{message}</p>
    </div>
  );
}
