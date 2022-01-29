import React from "react";
import * as S from "./style"
import MainPageButton from "../Button/MainPage";

const MainPage: React.FC = () => {
  const user: string = "김형록";
  const candyAmount: number = 999;
  const logged: boolean = true;
  return (
    <S.MainPage>
      <S.Content>
        <S.Explanation>
          <S.UserExplanation>
            {user}님<S.Pink>의</S.Pink> 캔디머신
          </S.UserExplanation>
          <S.CountExplanation>
            {candyAmount}개<S.Pink>의</S.Pink> 사탕<S.Pink>이 들어있어요</S.Pink>
          </S.CountExplanation>
        </S.Explanation>
        <S.CandyMachine src="/Images/CandyMachine.png" alt="candymachine" />
        <MainPageButton desc={logged ? "캔디 머신 공유하기" : "내 캔디 머신 만들러가기"} />
      </S.Content>
    </S.MainPage>
  );
};

export default MainPage;