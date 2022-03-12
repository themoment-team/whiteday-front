import React from "react";
import * as S from "./style";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { loggedAtom } from "../../../Atoms";
import api from "../../../lib/api";

const LogOutButton: React.FC = () => {
  const [, , removeCookies] = useCookies(["JSESSIONID"]);
  const setLogged = useSetRecoilState(loggedAtom);

  const LogOut = () => {
    api
      .get("/v1/logout")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    removeCookies("JSESSIONID", { path: "/" });
    setLogged(false);
    window.location.reload();
  };

  return <S.LogOutButton onClick={LogOut}>로그아웃</S.LogOutButton>;
};

export default LogOutButton;
