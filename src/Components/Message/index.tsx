import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";
import * as I from "../../Assets/SVG";
import { isShowMessage, machineIndexAtom, candyIndexAtom } from "../../Atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";

const Message: React.FC<{}> = () => {
  const setShow = useSetRecoilState(isShowMessage);
  const [name, setName] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const candyIndex = useRecoilValue(candyIndexAtom)
  const machineIndex = useRecoilValue(machineIndexAtom)

  // const content: string =
  useEffect(() => {
    axios.get("/v1/login/info")
      .then(response => {
        // setName(response.data.data.candies[machineIndex * 7 + candyIndex].)
        // setContent
      })
  })
  
  return (
    <S.Background>
      <S.Message>
        <S.Container>
          <S.Name>{name}</S.Name>
          <span onClick={() => setShow(false)}>
            <I.Close />
          </span>
        </S.Container>
        <S.Content>{content}</S.Content>
      </S.Message>
    </S.Background>
  );
};

export default Message;
