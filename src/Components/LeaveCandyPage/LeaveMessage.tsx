import React from "react";
import * as S from "./style";
import { CandyI } from "./index";

type PropsType = {
  candyData: CandyI;
  changeCandyData: (data: CandyI) => void;
};

const LeaveMessage: React.FC<PropsType> = ({ candyData, changeCandyData }) => {
  return (
    <S.Circle>
      <S.InputNickname
        type="text"
        placeholder="닉네임을 입력하세요 (10자 이내)"
        maxLength={10}
        value={candyData.title}
        onChange={(e) =>
          changeCandyData({ ...candyData, title: e.target.value })
        }
      />
      <S.MessageInput
        placeholder="달콤한 한 마디를 남겨주세요&#13;&#10;(150자 이내)"
        maxLength={150}
        value={candyData.message}
        onChange={(e) =>
          changeCandyData({ ...candyData, message: e.target.value })
        }
      />
    </S.Circle>
  );
};

export default LeaveMessage;
