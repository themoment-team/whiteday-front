import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

interface contentProps{
  desc:string
}

const MainPageButton: React.FC<contentProps> = ({desc}) => {
  return (
    <S.Button>
      <Link to="/helloworld">
        <S.Desc>
          {desc}
        </S.Desc>
      </Link>
    </S.Button>
  );
}

export default MainPageButton;