import "./App.css";
import React from "react";
import { Title } from "./Components/Title";
import { Box } from "@chakra-ui/react";
import { UploadForm } from "./Components/UploadForm";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <UploadForm/>
    </div>
  );
}

export default App;
