import { useState } from "react";
import Background from "../Background";
import CandyDesign from "./CandyDesign";
import * as S from "./style";

function LeaveCandyPage() {
  const [pageNum, setPageNum] = useState(0);
  return (
    <S.Main>
      <Background brownBoxVisible={pageNum < 2} />
      <S.Position>
        <CandyDesign pageNum={pageNum} />
        <S.NextButton onClick={() => setPageNum(pageNum + 1)}>
          다음으로
        </S.NextButton>
      </S.Position>
    </S.Main>
  );
}

export default LeaveCandyPage;
