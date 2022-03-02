import { useState } from "react";
import CandyDesign from "./CandyDesign";
import LeaveMessage from "./LeaveMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./style";

export interface CandyI {
  color: string;
  shape: string;
  title: string;
  message: string;
}

function LeaveCandyPage() {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState(0);
  const [candyData, setCandyData] = useState<CandyI>({
    color: "",
    shape: "",
    title: "",
    message: "",
  });

  const onClick = async () => {
    if (pageNum >= 2) {
      try {
        if (
          !candyData.color ||
          !candyData.shape ||
          !candyData.message ||
          !candyData.title
        )
          return;

        await axios.post(
          `http://ec2-54-180-39-133.ap-northeast-2.compute.amazonaws.com/v1/candy/${"memberUri"}`,
          candyData,
        );
        navigate("/");
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
