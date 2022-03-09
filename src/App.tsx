import React from "react";
import { Routes, Route } from "react-router-dom";
import * as P from "./Pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/:id/leaveCandy" element={<P.LeaveCandy />} />
      <Route path="*" element={<P.NotFound />} />
      <Route path="/helloworld" element={<P.HelloWorld />} />
      <Route path="/loading/:id" element={<P.Loading />} />
    </Routes>
  );
};

export default App;
