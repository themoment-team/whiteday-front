import React from "react";
import * as S from "./style";

const ColorList = ["C5ED9C", "D7BCED", "E985A3", "8DE2D8", "F8EC83", "F1F1F1"];
const ShapeList = [null, "star", "heart", "diamond", "circle", "slash"];

type PropsType = {
  pageNum: number;
};

const CandyDesign: React.FC<PropsType> = ({ pageNum }) => {
  return (
    <>
      <S.Title>
        보낼 사탕을 <span>선택하세요</span>
      </S.Title>
      <S.ColorBox>
        {pageNum === 0 &&
          ColorList.map((color, index) => (
            <S.CandyColor key={index} style={{ background: `#${color}` }} />
          ))}

        {pageNum === 1 &&
          ShapeList.map((shape, index) => (
            <S.CandyShape
              key={index}
              style={{
                background: "blue",
                backgroundImage: `url(/images/candyShape/${shape}.png)`,
                backgroundPosition: "center",
              }}
            />
          ))}
      </S.ColorBox>
    </>
  );
};

export default CandyDesign;
