import * as S from "./style"
import React, { useState, useEffect } from "react";
import axios from "axios";

interface bundleType {
  select: boolean
}

const CandyList: React.FC = () => {
  const logged: boolean = true;
  const [candyBundle, setCandyBundle] = useState<object[]>([]);

  useEffect(() => {
    axios.get("/v1/member/39fa000e25fc0ba48c6b9488d16e016cd052d32dee483fb9d3592d51a37b1918")
      .then(response => {
        const candies: object[] = response.data.data.candies;
        const count = Math.ceil(candies.length / 7);
        let processedCandies: object[] = [];
        for (let i: number = 0; i < count; i++)
          processedCandies.push({ ...candies.slice(i * 7, (i + 1) * 7), select: i === 0 ? true : false, id: i });
        setCandyBundle([...processedCandies]);
      })
  }, [])

  const select = (id: number) => {
    setCandyBundle(
      candyBundle.map((bundle: object, index: number) => 
        index === id ? { ...bundle, select: true } : { ...bundle, select: false }
      )
    );
  };

  return (
    <S.CandyList>
      {logged && candyBundle.map((bundle:object, index: number) => (
        <S.CandyListIndex key={index} select={(bundle as bundleType).select} onClick={() => select(index)} />
      ))}
    </S.CandyList>
  )
}

export default CandyList;