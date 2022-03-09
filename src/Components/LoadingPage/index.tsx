import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoadingPage = () => {
  const param = useParams().id;
  const [cookies, setCookie] = useCookies(["JSESSIONID"]);
  const navigate = useNavigate();

  useEffect(() => {
    setCookie("JSESSIONID", param, { path: "/" });
    navigate("/");
  }, []);

  return <></>;
};

export default LoadingPage;
