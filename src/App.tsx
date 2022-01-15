import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import * as P from "./Pages";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </>
  );
};

export default App;
