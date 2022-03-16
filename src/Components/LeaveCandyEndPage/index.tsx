import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

const LeaveCandyEndPage: React.FC = () => {
  return (
    <S.LeaveCandyEnd>
      <S.ContentWrap>
        <S.Content>
          <S.Text>
            사탕을 나눌 수 있는 기간이 종료되었어요
          </S.Text>
          <Link to="/">
            <S.Home>
              홈으로 가기
            </S.Home>
          </Link>
        </S.Content>
      </S.ContentWrap>
    </S.LeaveCandyEnd>
  )
}

export default LeaveCandyEndPage