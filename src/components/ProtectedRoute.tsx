import type { ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h2 className="text-3xl font-bold mb-4">Authentication Required</h2>
        <p className="text-xl">Please sign in to access this page.</p>
      </div>
    );
  }

  return <>{children}</>;
}
