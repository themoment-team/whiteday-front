import React from "react";
import * as S from "./style"

const MainPage: React.FC = () => {
  const user: string = "김형록";
  const candyAmount: number = 999;
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
      </S.Content>
    </S.MainPage>
  );
};

export default MainPage;