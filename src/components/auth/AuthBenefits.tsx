export default function AuthBenefits() {
  return (
    <div className="mt-8 pt-8 border-t border-neutral-800">
      <h3 className="text-white font-bold text-center mb-4">
        Benefits of Signing Up:
      </h3>
      <ul className="space-y-3 text-neutral-300">
        <li className="flex items-start gap-3">
          <span className="text-accent text-xl">✓</span>
          <span>Create and save your own quizzes</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent text-xl">✓</span>
          <span>Keep track of your favorites</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent text-xl">✓</span>
          <span>Track your history and results</span>
        </li>
      </ul>
    </div>
  );
}
