import React from "react";
import { Routes, Route} from "react-router-dom";
import * as P from "./Pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<P.ServiceEnd />} />
    </Routes>
  );
};

export default App;
