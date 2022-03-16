import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { machineIndexAtom, isShowMessage, candyIndexAtom, sharedAtom , loggedAtom} from "../../Atoms";
import api from "../../lib/api";
import { useParams } from "react-router-dom";

interface candyType {
  color: string;
  writer: string;
  shape: string;
  candyId: number
}

const CandyMachine: React.FC = () => {
  const [candies, setCandies] = useState<object[]>([]);
  const machineIndex = useRecoilValue(machineIndexAtom);
  const setShow = useSetRecoilState(isShowMessage);
  const setCandyIndex = useSetRecoilState(candyIndexAtom);
  const shared = useRecoilValue(sharedAtom);
  const { member_uri } = useParams();
  const logged = useRecoilValue(loggedAtom)

  useEffect(() => {
    api.get(shared ? `/v1/member/${member_uri}` : "/v1/login/info")
      .then((response) => 
        setCandies(response.data.data.candies.slice(machineIndex * 7,(1 + machineIndex) * 7))
      );
  }, [machineIndex]);

  const showCandy = (index: number) => {
    setCandyIndex(index);
    new Date() < new Date("2022-3-14") && logged
      ? alert("사탕은 3월 14일에 확인 가능해요!")
      : setShow(true);
  };

  return (
    <S.CandyMachine>
      <S.CandyMachineImg src="/Images/CandyMachine.png" />
      <S.CandyBox>
        {(logged || shared) &&
          candies.map((candy: object, index: number) => (
            <S.Candy
              key={index}
              shape={(candy as candyType).shape}
              color={`#${(candy as candyType).color}`}
              index={index}
              onClick={() => showCandy((candy as candyType).candyId)}
            >
              <S.Text>{(candy as candyType).writer}</S.Text>
            </S.Candy>
          ))}
      </S.CandyBox>
    </S.CandyMachine>
  );
};

export default CandyMachine;
