import React from "react";
import * as S from "./style";

interface brownBoxVisibleProps{
  brownBoxVisible: boolean;
}

const Background: React.FC<brownBoxVisibleProps> = ({brownBoxVisible}) => {
  return (
    <S.Background>
      <S.PinkBackground>
        {brownBoxVisible && <S.BrownBackground />}
      </S.PinkBackground>
    </S.Background>
  );
}

export default Background;