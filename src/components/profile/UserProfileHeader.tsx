import userIcon from "../../assets/user-full.png";

interface UserProfileHeaderProps {
  userName: string;
  quizCount: number;
}

export default function UserProfileHeader({
  userName,
  quizCount,
}: UserProfileHeaderProps) {
  return (
    <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-neutral-800 flex items-center justify-center border-4 border-neutral-700">
            <img
              src={userIcon}
              alt="User profile"
              className="w-18 h-18 invert"
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-black mb-2">{userName}</h1>
          <div className="flex flex-wrap gap-4 text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-accent text-xl"></span>
              <span>
                {quizCount} {quizCount === 1 ? "Quiz" : "Quizzes"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{quizCount}</p>
            <p className="text-sm text-neutral-400">Created</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">-</p>
            <p className="text-sm text-neutral-400">Plays</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">-</p>
            <p className="text-sm text-neutral-400">Favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
