import React from "react";
import * as S from "./style"
import MainPageButton from "../Button/MainPage";
import CandyList from "../CandyList";

const MainPage: React.FC = () => {
  const user: string = "김형록";
  const candyAmount: number = 999;
  const logged: boolean = false;

  return (
    <S.MainPage>
      <S.Content>
        {logged ? (
          <S.Explanation>
            <S.UserExplanation>
              {user}님<S.Pink>의</S.Pink> 캔디머신
            </S.UserExplanation>
            <S.CountExplanation>
              {candyAmount}개<S.Pink>의</S.Pink> 사탕
              <S.Pink>이 들어있어요</S.Pink>
            </S.CountExplanation>
          </S.Explanation>
        ) : (
          <S.Explanation>
            <S.Title src="/Images/Title.png" />
            <S.TitleExplanation>캔디머신에 사탕을 담아봐</S.TitleExplanation>
          </S.Explanation>
        )}
        <S.CandyMachine src="/Images/CandyMachine.png" alt="candymachine" />
        <CandyList />
        <MainPageButton />
      </S.Content>
    </S.MainPage>
  );
};

export default MainPage;