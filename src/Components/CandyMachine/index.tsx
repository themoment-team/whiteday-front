import React, {useEffect, useState} from "react";
import * as S from "./style"
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { machineIndexAtom, isShowMessage, candyIndexAtom } from "../../Atoms";

interface candyType{
  color: string
  writer: string
  shape: string
}


const CandyMachine: React.FC = () => {
  const [candies, setCandies] = useState<object[]>([]);
  const machineIndex = useRecoilValue(machineIndexAtom)
  const setShow = useSetRecoilState(isShowMessage)
  const setCandyIndex = useSetRecoilState(candyIndexAtom)

  useEffect(() => {
    axios.get("/v1/login/info")
      .then(response => {
        setCandies(response.data.data.candies.slice(machineIndex * 7, (1 + machineIndex) * 7));
        console.log(candies)
      })
  }, [machineIndex])

  const showCandy = (index: number) => {
    setCandyIndex(index)
    new Date() < new Date("2022-3-14")
      ? alert("사탕은 3월 14일에 확인 가능해요!")
      : setShow(true);
  }
  
  return (
    <S.CandyMachine>
      <S.CandyMachineImg src="/Images/CandyMachine.png"/>
      <S.CandyBox>
        {candies.map((candy: object, index: number) => (
          <S.Candy key={index} shape={(candy as candyType).shape} color={`#${(candy as candyType).color}`} index={index} onClick={() => showCandy(index)}>{(candy as candyType).writer}</S.Candy>
        ))}
      </S.CandyBox>
    </S.CandyMachine>
  );
}

export default CandyMachine