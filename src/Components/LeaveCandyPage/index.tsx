import { useState } from "react";
import Background from "../Background";
import CandyDesign from "./CandyDesign";
import LeaveMessage from "./LeaveMessage";
import * as S from "./style";

function LeaveCandyPage() {
  const [pageNum, setPageNum] = useState(0);
  return (
    <S.Main>
      <Background brownBoxVisible={pageNum < 2} />
      <S.Position>
        {pageNum < 2 ? (
          <CandyDesign pageNum={pageNum} />
        ) : (
          <>
            <S.Title>한 마디를 남겨주세요</S.Title>
            <LeaveMessage />
          </>
        )}
        <S.NextButton
          shadowBlack={pageNum < 2}
          onClick={() => setPageNum(pageNum + 1)}
        >
          {pageNum < 2 ? "다음으로" : "사탕 보내기"}
        </S.NextButton>
      </S.Position>
    </S.Main>
  );
}

export default LeaveCandyPage;
