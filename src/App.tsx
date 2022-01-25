import React from "react";
import { Routes, Route } from "react-router-dom";
import * as P from "./Pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route element={<P.NotFound />} />
    </Routes>
  );
};

export default App;
