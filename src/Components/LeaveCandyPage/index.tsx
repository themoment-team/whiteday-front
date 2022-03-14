import { useState } from "react";
import { useParams } from "react-router-dom";
import CandyDesign from "./CandyDesign";
import LeaveMessage from "./LeaveMessage";
import { useNavigate } from "react-router-dom";
import api from "../../lib/api";
import * as S from "./style";

export interface CandyI {
  color: string;
  shape: string;
  writer: string;
  content: string;
}

function LeaveCandyPage() {
  const navigate = useNavigate();
  const { member_uri } = useParams();
  const [pageNum, setPageNum] = useState(0);
  const [candyData, setCandyData] = useState<CandyI>({
    color: "",
    shape: "",
    writer: "",
    content: "",
  });

  const onClick = async () => {
    if (pageNum >= 2) {
      try {
        if (
          !candyData.color ||
          !candyData.shape ||
          !candyData.content ||
          !candyData.writer.trim()
        )
          return;

        await api.post(`/v1/candy/${member_uri}`, candyData);
        navigate(`/${member_uri}`);
      } catch (e) {
        console.error(e);
      }
    } else if (
      (candyData.color && pageNum === 0) ||
      (candyData.shape && pageNum === 1)
    ) {
      setPageNum(pageNum + 1);
    }
  };

  return (
    <S.Main>
      <S.Combine>
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
      </S.Combine>
      <S.NextButton shadowBlack={pageNum < 2} onClick={onClick}>
        {pageNum < 2 ? "다음으로" : "사탕 보내기"}
      </S.NextButton>
    </S.Main>
  );
}

export default LeaveCandyPage;
