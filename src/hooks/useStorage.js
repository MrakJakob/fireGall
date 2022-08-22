import { useState, useEffect } from "react";
import { appStorage, appFirestore, timestamp } from "../Firebase/config";


export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = appStorage.ref(file.name);  // 1
    const collectionRef = appFirestore.collection("images");


    storageRef.put(file).on('state_changed', (snap) => {  // we attach a listener
        let progressPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(progressPercentage)
    }, (err) => {
        setError(err)
    }, async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp()
        collectionRef.add({ url, createdAt })
        setUrl(url);
    }) // uploads the file to the reference 1 (async)
  }, [file]); // function is called anytime the dependency "file" changes

  return {progress, url, error}
}
