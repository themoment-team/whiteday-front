import React from "react";
import * as S from "./style"
import api from "../../../lib/api";

const LogOutButton: React.FC = () => {
  const LogOut = () => {
    api.get("/v1/logout")
  }

  return (
    <S.LogOutButton onClick={LogOut}>
      로그아웃
    </S.LogOutButton>
  )
}

export default LogOutButton;