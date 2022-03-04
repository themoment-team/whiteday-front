import React, { useEffect, useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/SVG";
import { isShowMessage, machineIndexAtom, candyIndexAtom } from "../../Atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";
import api from "../../lib/api";

const Message: React.FC<{}> = () => {
  const setShow = useSetRecoilState(isShowMessage);
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const candyIndex = useRecoilValue(candyIndexAtom);
  const machineIndex = useRecoilValue(machineIndexAtom);

  // const content: string =
  useEffect(() => {
    api.get(`/v1/candy/${machineIndex * 7 + candyIndex}`)
      .then((response) => {
        setName(response.data.data.writer)
        setContent(response.data.data.content)
    });
  });

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
