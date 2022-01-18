import React from "react";
import { Routes, Route } from "react-router-dom";
import * as P from "./Pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/leaveCandy" element={<P.LeaveCandy />} />
    </Routes>
  );
};

export default App;
