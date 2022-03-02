import React, {useEffect, useState} from "react";
import * as S from "./style"
import axios from "axios";
import { useRecoilValue } from "recoil"
import { machineIndexAtom } from "../../Atoms";

interface candyType{
  color: string
}


const CandyMachine: React.FC = () => {
  let name: string;
  const [candies, setCandies] = useState<object[]>([])
  const machineIndex = useRecoilValue(machineIndexAtom)

  useEffect(() => {
    axios.get("/v1/login/info")
      .then(response => {
        setCandies(response.data.data.candies.slice(machineIndex * 7, (1 + machineIndex) * 7));
        console.log(candies)
        // name = candies[0].color;
        // console.log(name)
      })
  }, [machineIndex])
  
  return (
    <S.CandyMachine>
      <S.CandyBox>
        {candies.map((candy: object, index: number) => (
          <S.Candy key={index} color={`#${(candy as candyType).color}`} index={index}></S.Candy>
        ))}
      </S.CandyBox>
    </S.CandyMachine>
  );
}

export default CandyMachine