import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { createEmptyQuiz } from "../types/quizBlueprint";
import { useAuth } from "../contexts/AuthContext";

function onCreateClick() {
  return doc(collection(db, "quizzes"));
}

interface QuizPopupProps {
  onCreated?: () => void;
}

export default function QuizPopup({ onCreated }: QuizPopupProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setThumbnailFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form>
      <h1 className="text-3xl font-bold mb-4">Create new Quiz</h1>
      <input
        type="text"
        placeholder="Quiz Title"
        className=" p-2 mb-4 w-full rounded-3xl bg-gray-700 text-gray-200"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Quiz Description"
        className=" p-2 mb-4 w-full rounded-3xl h-24 bg-gray-700 text-gray-200"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="border-2 border-dashed border-primary rounded-3xl p-8 mb-4 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
          className="hidden"
          id="thumbnail-upload"
        />
        <label htmlFor="thumbnail-upload" className="cursor-pointer">
          {thumbnailPreview ? (
            <img
              src={thumbnailPreview}
              alt="Thumbnail preview"
              className="max-h-48 mx-auto rounded-lg"
            />
          ) : (
            <p className="text-gray-500 italic">Upload thumbnail</p>
          )}
        </label>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={async () => {
            try {
              setLoading(true);

              const docRef = onCreateClick();

              let thumbnailUrl = "";
              if (thumbnailFile) {
                const storageRef = ref(
                  storage,
                  `thumbnails/${docRef.id}/${thumbnailFile.name}`
                );
                await uploadBytes(storageRef, thumbnailFile);
                thumbnailUrl = await getDownloadURL(storageRef);
              }

              const newQuiz = createEmptyQuiz(
                docRef.id,
                title.trim() || undefined,
                description.trim() || undefined,
                undefined,
                currentUser?.displayName || "Anonymous",
                undefined,
                thumbnailUrl,
                undefined,
                undefined,
                undefined,
                undefined,
                currentUser?.uid
              );
              await setDoc(docRef, newQuiz);

              onCreated?.();
              navigate(`/create-quiz/${docRef.id}`);
            } catch (err) {
              console.error("Failed to create quiz:", err);
            } finally {
              setLoading(false);
            }
          }}
          className="bg-primary text-white font-medium text-2xl w-1/2 rounded-3xl py-3 hover:scale-105 transition-transform duration-200 flex justify-center disabled:opacity-60"
          disabled={loading}
        >
          {loading ? <LoadingSpinner size={24} /> : "create"}
        </button>
      </div>
    </form>
  );
}
