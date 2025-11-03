import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

function onCreateClick(title: string, description: string) {
  return addDoc(collection(db, "quizzes"), {
    title,
    description,
  });
}

interface QuizPopupProps {
  onCreated?: () => void;
}

export default function QuizPopup({ onCreated }: QuizPopupProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <form>
      <h1 className="text-3xl font-bold mb-4">Create new Quiz</h1>
      <input
        type="text"
        placeholder="Quiz Title"
        className="border-2 border-primary p-2 mb-4 w-full rounded-3xl caret-black bg-white text-gray-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Quiz Description"
        className="border-2 border-primary p-2 mb-4 w-full rounded-3xl caret-black h-24 bg-white text-gray-800"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="border-2 border-dashed border-primary rounded-3xl p-8 mb-4 text-center">
        <p className="text-gray-500">Upload thumbnail</p>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={async () => {
            const docRef = await onCreateClick(title, description);
            onCreated?.();
            navigate(`/create-quiz/${docRef.id}`);
          }}
          className="bg-primary text-white font-black text-2xl w-1/2 rounded-3xl py-3 hover:scale-105 transition-transform duration-200 flex justify-center"
        >
          Create
        </button>
      </div>
    </form>
  );
}
