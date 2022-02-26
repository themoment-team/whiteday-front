import * as S from "./style"
import React, {useState, useEffect} from "react";

interface bundleType {
  choose: boolean
}

const CandyList: React.FC = () => {
  const logged: boolean = true;
  const candies: object[] = [
    {
      id: 1,
      color: "color",
      shape: "shape",
    },
    {
      id: 2,
      color: "color",
      shape: "shape",
    },
    {
      id: 3,
      color: "color",
      shape: "shape",
    },
    {
      id: 4,
      color: "color",
      shape: "shape",
    },
    {
      id: 5,
      color: "color",
      shape: "shape",
    },
    {
      id: 6,
      color: "color",
      shape: "shape",
    },
    {
      id: 7,
      color: "color",
      shape: "shape",
    },
    {
      id: 8,
      color: "color",
      shape: "shape",
    },
    {
      id: 9,
      color: "color",
      shape: "shape",
    },
    {
      id: 10,
      color: "color",
      shape: "shape",
    },
    {
      id: 11,
      color: "color",
      shape: "shape",
    },
    {
      id: 12,
      color: "color",
      shape: "shape",
    },
    {
      id: 13,
      color: "color",
      shape: "shape",
    },
    {
      id: 14,
      color: "color",
      shape: "shape",
    },
    {
      id: 15,
      color: "color",
      shape: "shape",
    },
    {
      id: 16,
      color: "color",
      shape: "shape",
    },
    {
      id: 17,
      color: "color",
      shape: "shape",
    },
    {
      id: 18,
      color: "color",
      shape: "shape",
    },
    {
      id: 19,
      color: "color",
      shape: "shape",
    },
    {
      id: 20,
      color: "color",
      shape: "shape",
    },
    {
      id: 21,
      color: "color",
      shape: "shape",
    },
    {
      id: 22,
      color: "color",
      shape: "shape",
    },
    {
      id: 23,
      color: "color",
      shape: "shape",
    },
    {
      id: 24,
      color: "color",
      shape: "shape",
    },
    {
      id: 25,
      color: "color",
      shape: "shape",
    },
    {
      id: 26,
      color: "color",
      shape: "shape",
    },
    {
      id: 27,
      color: "color",
      shape: "shape",
    },
    {
      id: 28,
      color: "color",
      shape: "shape",
    },
  ];
  const [candyBundle, setCandyBundle] = useState<object[]>([]);

  let processedCandies:object[] = [];
  let count:number = Math.round(candies.length / 7);

  useEffect(() => {
    for (let i: number = 0; i < count; i++)
      processedCandies.push({ ...candies.slice(i * 7, (i + 1) * 7), choose: i === 0 ? true : false, id: i })
    setCandyBundle([...processedCandies])
  }, [])

  const choose = (id: number) => {
    setCandyBundle(
      candyBundle.map((bundle: object, index: number) => 
        index === id ? { ...bundle, choose: true } : { ...bundle, choose: false }
      )
    );
  };

  return (
    <S.CandyList>
      {logged && candyBundle.map((bundle:object, index: number) => (
        <S.CandyListIndex key={index} choose={(bundle as bundleType).choose} onClick={() => choose(index)} />
      ))}
    </S.CandyList>
  )
}

export default CandyList;