import React from "react";
import * as S from "./style";

interface brownBoxVisibleProps{
  brownBoxVisible: boolean,
  maxHeight: number,
};

const Background: React.FC<brownBoxVisibleProps> = ({brownBoxVisible, maxHeight}) => {
  return (
    <S.Background maxHeight={maxHeight}>
      <S.PinkBackground>
        {brownBoxVisible && <S.BrownBackground />}
      </S.PinkBackground>
    </S.Background>
  );
}

export default Background;