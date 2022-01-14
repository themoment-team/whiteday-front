import React from "react";
import * as S from "./style";

interface brownBoxVisibleProps{
  visible: boolean;
}

const Background: React.FC<brownBoxVisibleProps> = ({visible}) => {
  return (
    <S.Background>
      <S.PinkBackground visible={visible} />
      {visible && <S.BrownBackground />}
    </S.Background>
  );
}

export default Background;