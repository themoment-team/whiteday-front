import React, { useEffect, useState } from "react";
import * as S from "./style"
import MainPageButton from "../Button/MainPage";
import CandyList from "../CandyList";
import CandyMachine from "../CandyMachine";
import { isShowMessage, loggedAtom } from "../../Atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import Message from "../Message";
import api from "../../lib/api";
import LogOutButton from "../Button/LogOut";

const MainPage: React.FC = () => {
  const [username, setUsername] = useState<string>("")
  const [candyAmount, setCandyAmount] = useState<number>(0)
  const [logged, setLogged] = useRecoilState(loggedAtom)

  const show = useRecoilValue(isShowMessage)


  useEffect(() => {
    api.get("/v1/login/info")
      .then((response) => {
        setUsername(response.data.data.member.name);
        setCandyAmount(response.data.data.candies.length);
        setLogged(true);
      })
      .catch(error => {
        setLogged(false)
      })
  }, [])

  return (
    <S.MainPage>
      {logged && <LogOutButton />}
      <S.Content>
        {logged ? (
          <S.Explanation>
            <S.UserExplanation>
              {username}님<S.Pink>의</S.Pink> 캔디머신
            </S.UserExplanation>
            <S.CountExplanation>
              {candyAmount}개<S.Pink>의</S.Pink> 사탕
              <S.Pink>이 들어있어요</S.Pink>
            </S.CountExplanation>
          </S.Explanation>
        ) : (
          <S.Explanation>
            <S.Title src="/Images/Title.png" alt="title"/>
            <S.TitleExplanation>캔디머신에 사탕을 담아봐</S.TitleExplanation>
          </S.Explanation>
        )}
        <CandyMachine />
        <CandyList />
        <MainPageButton />
      </S.Content>
      {show && <Message />}
    </S.MainPage>
  );
};

export default MainPage;
