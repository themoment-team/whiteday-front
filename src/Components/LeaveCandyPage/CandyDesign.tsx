import React from "react";
import * as S from "./style";
import { CandyI } from "./index";

const ColorList: Array<string> = [
  "C5ED9C",
  "D7BCED",
  "E985A3",
  "8DE2D8",
  "F8EC83",
  "F1F1F1",
];
const ShapeList: Array<string> = [
  "none",
  "star",
  "heart",
  "diamond",
  "circle",
  "slash",
];

type PropsType = {
  pageNum: number;
  candyData: CandyI;
  changeCandyData: (data: CandyI) => void;
};

const CandyDesign: React.FC<PropsType> = ({
  pageNum,
  candyData,
  changeCandyData,
}) => {
  return (
    <>
      <S.Title>
        보낼 사탕을 <span>선택하세요</span>
      </S.Title>
      <S.ColorBox>
        {pageNum === 0 &&
          ColorList.map((color, index) => (
            <S.Candy
              onClick={() =>
                changeCandyData({
                  ...candyData,
                  color: candyData.color === color ? "" : color,
                })
              }
              key={index}
              style={{ background: `#${color}` }}
              focus={color === candyData.color}
            />
          ))}

        {pageNum === 1 &&
          ShapeList.map((shape, index) => (
            <S.Candy
              key={index}
              onClick={() => changeCandyData({ ...candyData, shape })}
              style={{
                background: `#${candyData.color}`,
                backgroundImage: `url(/Images/candyShape/${shape}.png)`,
                backgroundPosition: "center",
              }}
              focus={shape === candyData.shape}
            />
          ))}
      </S.ColorBox>
    </>
  );
};

export default CandyDesign;
