import React from "react";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import { AppStyle } from "./Style/App";

export default function App() {
  return (
    <AppStyle>
      <Navbar />
      <Main />
    </AppStyle>
  );
}
