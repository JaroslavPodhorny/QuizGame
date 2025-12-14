import { collection, doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import type { Quiz} from "../types/quizBlueprint";

async function saveQuiz(quizId: string | undefined, quizData: any): Promise<boolean> {
    if (!quizId) return false;
    try {
        const ref = collection(db, "quizzes");
        await setDoc(doc(ref, quizId), quizData, { merge: true });
        return true;
    } catch (error) {
        console.error("Error saving quiz:", error);
        return false;
    }
}

async function getQuiz(quizId: string) : Promise<Quiz | null> {
    const ref = doc(collection(db, "quizzes"), quizId);
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) {
        return snapshot.data() as Quiz;
    } else {
        console.log("Quiz not found");
        return null;
    }
}

async function deleteQuiz(quizId: string): Promise<boolean> {
    try {
        const ref = doc(collection(db, "quizzes"), quizId);
        await deleteDoc(ref);
        console.log("Quiz deleted successfully:", quizId);
        return true;
    } catch (error) {
        console.error("Error deleting quiz:", error);
        alert(`Delete error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        return false;
    }
}

export { saveQuiz, getQuiz, deleteQuiz };