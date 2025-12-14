import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import type { QuizMetadata } from "../../types/quizBlueprint";
import LoadingPanel from "../loadingPanel";
import UserProfileHeader from "./UserProfileHeader";
import UserQuizGrid from "./UserQuizGrid";

export default function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userQuizzes, setUserQuizzes] = useState<QuizMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string>("User");

  useEffect(() => {
    if (!userId) return;

    const fetchUserQuizzes = async () => {
      setLoading(true);
      try {
        const quizzesRef = collection(db, "quizzes");

        const q = query(quizzesRef, where("userId", "==", userId));

        const snapshot = await getDocs(q);

        const quizzes: QuizMetadata[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<QuizMetadata, "id">),
        }));

        quizzes.sort((a, b) => {
          const dateA =
            typeof a.createdAt === "string"
              ? new Date(a.createdAt)
              : a.createdAt;
          const dateB =
            typeof b.createdAt === "string"
              ? new Date(b.createdAt)
              : b.createdAt;
          return dateB.getTime() - dateA.getTime();
        });

        setUserQuizzes(quizzes);

        if (quizzes.length > 0) {
          setUserName(quizzes[0].createdBy || "User");
        }
      } catch (error) {
        console.error("Error fetching user quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserQuizzes();
  }, [userId]);

  if (loading) {
    return <LoadingPanel />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <UserProfileHeader userName={userName} quizCount={userQuizzes.length} />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {userQuizzes.length === 0 ? "No Quizzes Yet" : "Quizzes"}
            </h2>
            <p className="text-neutral-400">{userQuizzes.length} quizzes</p>
          </div>

          {userQuizzes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">
                This user hasn't created any quizzes yet.
              </p>
              <button
                onClick={() => navigate("/discover")}
                className="mt-6 px-6 py-3 bg-primary hover:bg-blue-700 rounded-xl font-bold transition-colors"
              >
                Discover Quizzes
              </button>
            </div>
          ) : (
            <UserQuizGrid quizzes={userQuizzes} />
          )}
        </div>
      </div>
    </div>
  );
}
