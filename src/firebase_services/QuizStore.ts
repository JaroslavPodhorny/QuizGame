import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

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

async function getQuiz(quizId: string) {
    const ref = doc(collection(db, "quizzes"), quizId);
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) {
        return snapshot.data();
    } else {
        console.log("Quiz not found");
        return null;
    }
}

export { saveQuiz, getQuiz };