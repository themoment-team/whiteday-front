import React, {useState} from "react";
import * as S from "./style"

interface chooseProps {
  choose: boolean;
}

const CandyListIndex: React.FC<chooseProps> = ({ choose }) => {
  const [select, setSelect] = useState(choose)

  const selectClick = () => {
    setSelect(!select);
  }

  return <S.CandyListIndex choose={select} onClick={selectClick} />
}

export default CandyListIndex;