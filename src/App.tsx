import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as P from "./Pages";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
