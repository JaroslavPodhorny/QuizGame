import type { QuizMetadata } from "../types/quiz";
import { collection, orderBy, query, limit, getDocs, QueryDocumentSnapshot, startAfter } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default async function fetchQuizzes(
    pageSize: number,
    lastDoc?: QueryDocumentSnapshot,
    filter?: string
): Promise<{ data: QuizMetadata[]; last: QueryDocumentSnapshot | undefined; snapshotSize: number }> {
    const ref = collection(db, "quizzes");

    const q = lastDoc
        ? query(ref, orderBy("createdAt", "desc"), startAfter(lastDoc), limit(pageSize))
        : query(ref, orderBy("createdAt", "desc"), limit(pageSize));

    const snapshot = await getDocs(q);

    const snapshotSize = snapshot.docs.length;
    let data: QuizMetadata[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<QuizMetadata, "id">),
    }));

    if (filter) {
        const f = filter.toLowerCase();
        data = data.filter(q =>
            [
                (q as any).title,
                (q as any).name,
                (q as any).category,
                (q as any).description,
            ]
                .filter(Boolean)
                .some(v => String(v).toLowerCase().includes(f))
        );
    }

    const last = snapshot.docs[snapshot.docs.length - 1];
    return { data, last, snapshotSize };
}