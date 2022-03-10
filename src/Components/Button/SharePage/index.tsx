import React from "react";
import * as S from "./style"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SharePageButton: React.FC = () => {
  const {member_uri} = useParams();

  return (
    <S.Button>
        <Link to={"/" + member_uri + "/leaveCandy"}>
          <S.Desc>메세지 남기러 가기</S.Desc>
        </Link>
    </S.Button>
  );
};

export default SharePageButton;
