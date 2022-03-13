import React from "react";
import { Routes, Route} from "react-router-dom";
import * as P from "./Pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/:member_uri/leaveCandy" element={<P.LeaveCandy />} />
      <Route path="*" element={<P.NotFound />} />
      <Route path="/helloworld" element={<P.HelloWorld />} />
      <Route path="/loginError" element={<P.LoginError />}/>
      <Route path="/:member_uri" element={<P.Share />} />
      <Route path="/loading/:id" element={<P.Loading />} />
    </Routes>
  );
};

export default App;
