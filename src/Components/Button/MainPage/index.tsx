import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const MainPageButton: React.FC = () => {
  const logged: boolean = true;
  const URL: string = "/abcdefg";

  const copy = () => {
    navigator.clipboard.writeText(`https://whiteday.the-moment.org${URL}`);
  }

  return (
    <S.Button>
      {logged ? (
        <S.Desc onClick={copy}>
          캔디 머신 공유하기
        </S.Desc>
      ) : (
        <Link to="/helloWorld">
          <S.Desc>내 캔디 머신 만들러가기</S.Desc>
        </Link>
      )}
    </S.Button>
  );
}

export default MainPageButton;