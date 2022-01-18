import Background from "../Background";
import CandyDesign from "./CandyDesign";
import * as S from "./style";

function LeaveCandyPage() {
  return (
    <S.Main>
      <Background brownBoxVisible={true} />
      <S.Position>
        <CandyDesign />
        <S.NextButton>다음으로</S.NextButton>
      </S.Position>
    </S.Main>
  );
}

export default LeaveCandyPage;
