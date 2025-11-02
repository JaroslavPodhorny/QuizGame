import user from "../../assets/user.png";

export default function SignUp() {
  return (
    <button
      aria-label="Sign up"
      className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-200"
    >
      <span className="hidden sm:block sm:text-xl font-bold">sign up</span>
      <img
        src={user}
        alt="Sign up"
        className="w-8 h-8 md:w-10 md:h-10 invert"
      />
    </button>
  );
}
