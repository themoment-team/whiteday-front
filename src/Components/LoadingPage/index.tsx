import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const LoadingPage = () => {
  const param = useParams().id;
  const [cookies, setCookie] = useCookies(["JSESSIONID"]);
  const navigate = useNavigate();

  useEffect(() => {
    setCookie("JSESSIONID", param);
    navigate("/");
  }, []);

  return (
    <>
      <h1>로딩중</h1>
    </>
  );
};

export default LoadingPage;
