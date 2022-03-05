import React from "react";
import * as S from "./style"
import { Link } from "react-router-dom";

const SharePageButton: React.FC = () => {
  return (
    <S.Button>
        <Link to="/leaveCandy">
          <S.Desc>메세지 남기러 가기</S.Desc>
        </Link>
    </S.Button>
  );
};

export default SharePageButton;
