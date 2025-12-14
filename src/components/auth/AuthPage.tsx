import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import GoogleSignInButton from "./GoogleSignInButton";
import EmailSignInForm from "./EmailSignInForm";
import EmailSignUpForm from "./EmailSignUpForm";
import AuthDivider from "./AuthDivider";
import ErrorMessage from "./ErrorMessage";
import AuthBenefits from "./AuthBenefits";

type AuthMode = "signin" | "signup";

export default function AuthPage() {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, currentUser } =
    useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("signin");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithEmail(email, password);
      navigate("/");
    } catch (error: any) {
      console.error("Error signing in:", error);
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (error.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError("Failed to sign in. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      await signUpWithEmail(email, password, displayName);
      navigate("/");
    } catch (error: any) {
      console.error("Error signing up:", error);
      if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak. Please use a stronger password.");
      } else {
        setError("Failed to create account. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (currentUser) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12">
      <div className="w-full max-w-xl">
        <div className="bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-800">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
              {mode === "signin" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-neutral-400 text-lg">
              {mode === "signin"
                ? "Sign in to continue your quiz journey"
                : "Join us to create amazing quizzes"}
            </p>
          </div>

          <GoogleSignInButton
            onClick={handleGoogleSignIn}
            isLoading={isLoading}
          />

          <AuthDivider text="Or continue with email" />

          {mode === "signin" ? (
            <EmailSignInForm
              onSubmit={handleEmailSignIn}
              isLoading={isLoading}
            />
          ) : (
            <EmailSignUpForm
              onSubmit={handleEmailSignUp}
              isLoading={isLoading}
            />
          )}

          {error && <ErrorMessage message={error} />}

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setError(null);
              }}
              className="text-neutral-400"
            >
              {mode === "signin" ? (
                <span>
                  Don't have an account?{" "}
                  <span className="text-blue-600 hover:text-blue-400 transition-colors">
                    Sign up
                  </span>
                </span>
              ) : (
                <span>
                  Already have an account?{" "}
                  <span className="text-blue-600 hover:text-blue-400 transition-colors">
                    Sign in
                  </span>
                </span>
              )}
            </button>
          </div>

          <AuthBenefits />
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-neutral-400 hover:text-white transition-colors duration-200 underline"
          >
            Continue as guest
          </button>
        </div>
      </div>
    </div>
  );
}
