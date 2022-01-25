import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

interface contentProps{
  desc:string
}

const MainPageButton: React.FC<contentProps> = ({desc}) => {
  return (
    <Link to="/helloworld">
      <S.Button>{desc}</S.Button>
    </Link>
  );
}

export default MainPageButton;