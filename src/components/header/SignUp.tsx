import user from "../../assets/user.png";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = async () => {
    try {
      if (currentUser) {
        await signOut();
      } else {
        navigate("/auth");
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <button
      onClick={handleAuthClick}
      aria-label={currentUser ? "Sign out" : "Sign in"}
      className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-200"
    >
      {currentUser ? (
        <>
          <span className="hidden sm:block sm:text-xl font-bold">
            {currentUser.displayName || "User"}
          </span>
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="User avatar"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              onError={(e) => {
                // Fallback to default user icon if photo fails to load
                e.currentTarget.src = user;
                e.currentTarget.className = "w-8 h-8 md:w-10 md:h-10 invert";
              }}
            />
          ) : (
            <img
              src={user}
              alt="Sign out"
              className="w-8 h-8 md:w-10 md:h-10 invert"
            />
          )}
        </>
      ) : (
        <>
          <span className="hidden sm:block sm:text-xl font-bold">sign in</span>
          <img
            src={user}
            alt="Sign in"
            className="w-8 h-8 md:w-10 md:h-10 invert"
          />
        </>
      )}
    </button>
  );
}
