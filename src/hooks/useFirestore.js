import { useState, useEffect } from "react";
import { appFirestore } from "../Firebase/config";

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = appFirestore.collection(collection)
    .orderBy("createdAt", "desc")
    .onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsubscribe();  // unsubscribes from collection when we no longer need it

  }, [collection]);

  return { docs };
};
