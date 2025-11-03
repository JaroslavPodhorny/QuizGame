import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function FirebaseTest() {
  const [data, setData] = useState<string[]>([]);

  // Add a document
  const addItem = async () => {
    await addDoc(collection(db, "Jarda"), { name: "Item " + Date.now() });
    console.log("Added new item!");
    fetchItems();
  };

  // Read documents
  const fetchItems = async () => {
    const snapshot = await getDocs(collection(db, "Jarda"));
    const items = snapshot.docs.map((doc) => doc.data().name as string);
    setData(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-4">
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add Item
      </button>
      <ul className="mt-2">
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
