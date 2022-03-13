import React, { useState, useEffect } from "react";
import * as S from "./style"
import CandyMachine from "../CandyMachine";
import CandyList from "../CandyList";
import SharePageButton from "../Button/SharePage";
import api from "../../lib/api";
import { useParams } from "react-router-dom";
import { NotFound, Waiting } from "../../Pages";
import { sharedAtom } from "../../Atoms";
import { useRecoilState } from "recoil";

const SharePage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [candyAmount, setCandyAmount] = useState<number>(0);
  const [shared, setShared] = useRecoilState(sharedAtom);
  const [notFound, setNotFound] = useState<boolean>(false)

  const {member_uri} = useParams();

  useEffect(() => {
    api.get(`/v1/member/${member_uri}`)
      .then(response => {
        setUsername(response.data.data.member.name)
        setCandyAmount(response.data.data.candies.length)
        setShared(true)
      })
      .catch(error => {
        setShared(false)
        setNotFound(true)
      })
  })



  return (
    <>
      {shared ? (
        <S.SharePage>
          <S.Content>
            <S.Explanation>
              <S.UserExplanation>
                {username}님<S.Pink>의</S.Pink> 캔디머신
              </S.UserExplanation>
              <S.CountExplanation>
                {candyAmount}개<S.Pink>의</S.Pink> 사탕
                <S.Pink>이 들어있어요</S.Pink>
              </S.CountExplanation>
            </S.Explanation>
            <CandyMachine />
            <CandyList />
            <SharePageButton />
          </S.Content>
        </S.SharePage>
      ) : (
        notFound ? <NotFound /> :  <Waiting />
      )}
    </>
  );
}

export default SharePage;