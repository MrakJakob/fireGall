import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { ProgressBar } from "./ProgressBar";

export const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedTypes = ["image/png", "image/jpeg"];

  const handleInput = (e) => {
    // console.log("changed");
    let selectedFile = e.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <Input type="file" onChange={handleInput} m="4" mt="6"/>
      <Box className="output" p="4">
        {error && <Box className="error">{error}</Box>}
        {file && <Box className="file">{file.name}</Box>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
      </Box>
    </form>
  );
};
