import * as S from "./style";

const ColorList = ["C5ED9C", "D7BCED", "E985A3", "8DE2D8", "F8EC83", "F1F1F1"];

function CandyDesign() {
  return (
    <>
      <S.Title>
        보낼 사탕을 <span>선택하세요</span>
      </S.Title>
      <S.ColorBox>
        {ColorList.map((color, index) => (
          <S.CandyColor key={index} style={{ background: `#${color}` }} />
        ))}
      </S.ColorBox>
    </>
  );
}

export default CandyDesign;
