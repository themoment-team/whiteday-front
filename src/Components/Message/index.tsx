import React from "react";
import * as S from "./style";
import * as I from "../../Assets/SVG";
import { isShowMessage } from "../../Atoms/AtomContainer";
import { useRecoilState } from "recoil";

const Message: React.FC<{}> = () => {
  const [show, setShow] = useRecoilState(isShowMessage);
  const name: string = "화이트데이";
  const content: string =
    "달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요 달콤한 한마디를 남겨주세요";

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
