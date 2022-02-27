import React, { useState } from "react";
import Message from "../Message";
import * as S from "./style";
import { isShowMessage } from "../../Atoms/AtomContainer";
import { useRecoilState } from "recoil";

const MainPage: React.FC = () => {
  const user: string = "김형록";
  const candyAmount: number = 999;
  const [show, setShow] = useRecoilState(isShowMessage);
  return (
    <S.MainPage>
      <S.Explanation>
        <S.UserExplanation>
          {user}님<S.Pink>의</S.Pink> 캔디머신
        </S.UserExplanation>
        <S.CountExplanation>
          {candyAmount}개<S.Pink>의</S.Pink> 사탕<S.Pink>이 들어있어요</S.Pink>
        </S.CountExplanation>
      </S.Explanation>
      <S.CandyMachine
        src="/Images/CandyMachine.png"
        alt="candymachine"
        onClick={() => setShow(true)}
      />
      {show ? <Message /> : null}
    </S.MainPage>
  );
};

export default MainPage;
