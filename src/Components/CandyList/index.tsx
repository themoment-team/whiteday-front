import * as S from "./style"
import React, {useState} from "react";

const CandyList: React.FC = () => {
  const logged: boolean = true;
  const [candyBundle, setCandyBundle] = useState([
    { id: 0, choose: true },
    { id: 1, choose: false },
    { id: 2, choose: false },
    { id: 3, choose: false },
    { id: 4, choose: false },
    { id: 5, choose: false },
    { id: 6, choose: false },
    { id: 7, choose: false },
    { id: 8, choose: false },
  ]);

  const choose = (id: number) => {
    setCandyBundle(
      candyBundle.map(bundle => 
        bundle.id === id ? { ...bundle, choose: true } : { ...bundle, choose: false }
      )
    );
  }

  return (
    <S.CandyList>
      {logged && candyBundle.map((Bundle) => (
        <S.CandyListIndex key={Bundle.id} choose={Bundle.choose} onClick={() => choose(Bundle.id)} />
      ))}
    </S.CandyList>
  )
}

export default CandyList;