import { useState } from "react";
import Background from "../Background";
import CandyDesign from "./CandyDesign";
import LeaveMessage from "./LeaveMessage";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export interface CandyI {
  color: string;
  shape: string;
  message: string;
}

function LeaveCandyPage() {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(0);
  const [candyData, setCandyData] = useState<CandyI>({
    color: "",
    shape: "",
    message: "",
  });

  const onClick = () => {
    if (pageNum >= 2) {
      console.log({ ...candyData });
      navigate("/");
    } else {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <S.Main>
      <Background brownBoxVisible={pageNum < 2} />
      <S.Position>
        {pageNum < 2 ? (
          <CandyDesign
            candyData={candyData}
            pageNum={pageNum}
            changeCandyData={(data) => setCandyData(data)}
          />
        ) : (
          <>
            <S.Title>한 마디를 남겨주세요</S.Title>
            <LeaveMessage
              changeCandyData={(data) => setCandyData(data)}
              candyData={candyData}
            />
          </>
        )}
        <S.NextButton shadowBlack={pageNum < 2} onClick={onClick}>
          {pageNum < 2 ? "다음으로" : "사탕 보내기"}
        </S.NextButton>
      </S.Position>
    </S.Main>
  );
}

export default LeaveCandyPage;
