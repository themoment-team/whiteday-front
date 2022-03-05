import * as S from "./style";
import React, { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { machineIndexAtom, sharedAtom } from "../../Atoms";
import api from "../../lib/api";
import { useParams } from "react-router-dom";

interface bundleType {
  select: boolean;
}

const CandyList: React.FC = () => {
  const [candyBundle, setCandyBundle] = useState<object[]>([]);
  const setMachineIndex = useSetRecoilState(machineIndexAtom);
  const shared = useRecoilValue(sharedAtom);
  const member_uri = useParams().member_uri;

  useEffect(() => {
    shared ? api.get(`/v1/member/${member_uri}`) : api.get("/v1/login/info")
      .then((response) => {
        const count = Math.ceil(response.data.data.candies.length / 7);
        let processedCandies: object[] = [];
        for (let i: number = 0; i < count; i++)
          processedCandies.push({ select: i === 0 ? true : false, id: i });
        setCandyBundle([...processedCandies]);
    });
  }, []);

  const select = (id: number) => {
    setMachineIndex(id);
    setCandyBundle(
      candyBundle.map((bundle: object, index: number) =>
        index === id
          ? { ...bundle, select: true }
          : { ...bundle, select: false },
      ),
    );
  };

  return (
    <S.CandyList>
      {candyBundle.map((bundle: object, index: number) => (
        <S.CandyListIndex
          key={index}
          select={(bundle as bundleType).select}
          onClick={() => select(index)}
        />
      ))}
    </S.CandyList>
  );
};

export default CandyList;
