import React from "react";
import * as S from "./style"
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { loggedAtom } from "../../../Atoms";

const LogOutButton: React.FC = () => {
  const [, , removeCookies] = useCookies(["JSESSIONID"])
  const setLogged = useSetRecoilState(loggedAtom)

  const LogOut = () => {
    removeCookies("JSESSIONID");
    setLogged(false)
    window.location.reload();
  }

  return (
    <S.LogOutButton onClick={LogOut}>
      로그아웃
    </S.LogOutButton>
  )
}

export default LogOutButton;