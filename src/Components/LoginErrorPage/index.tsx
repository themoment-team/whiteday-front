import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style"

const LoginErrorPage: React.FC = () => {
  return (
    <S.LoginErrorPage>
      <S.ContentWrap>
        <S.Content>
          <S.Text>
            로그인은 GSM 계정으로만 가능해요!<br/>
            다시 로그인 해주세요!
          </S.Text>
          <Link to="/">
            <S.Home>
              홈으로 가기
            </S.Home>
          </Link>
        </S.Content>
      </S.ContentWrap>
    </S.LoginErrorPage>
  )
}

export default LoginErrorPage;