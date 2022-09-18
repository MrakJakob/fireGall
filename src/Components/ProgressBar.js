import { Progress } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

export const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
        setFile(null);
    }
  }, [url, setFile])

  return (
    <Progress className="progressBar" value={progress} colorScheme="primary" size="sm"/>
  );
};
