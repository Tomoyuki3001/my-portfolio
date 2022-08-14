import React from "react";
import { MainStyle } from "./Style/App";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
    <MainStyle className="main_container">
      <Navbar />
      <Main />
    </MainStyle>
  );
}
