import React from "react";
import Background from "../Background";
import * as S from "./style"

const ServiceEndPage: React.FC = () => {
  return (
    <S.ServiceEndPage>
      <Background brownBoxVisible={false} maxHeight={1000}/>
      <S.ContentBox>
        <S.Content>
          <S.Logo src="/thank.png" />
          <S.Explaination>
            올해 ‘캔디머신에 사탕을 담아봐’ 는 여기까지 입니다.
            <br />
            내년에는 더 달콤한 서비스로 찾아올게요.
            <br />
            <br />
            저희의 첫 캔디머신을 채워주셔서 감사해요.
            <br />
            지금까지 팀 더 모먼트 였습니다.
            <br />
            달콤한 하루 되세요!
          </S.Explaination>
          <S.TeamExplainationBox>
            <S.TeamExplaination>
              <S.TeamName>the_moment</S.TeamName>
              <S.ExplainMembers>
                FE : 김형록, 변찬우, 유시온
                <br />
                BE : 양시준, 조재영
                <br />
                DEVOPS : 노가성, 김시훈
                <br />
                DESIGN : 양세련, 안진형
              </S.ExplainMembers>
            </S.TeamExplaination>
            <S.Copyright>
              Copyright 2022. the moment All rights reserved.
            </S.Copyright>
          </S.TeamExplainationBox>
        </S.Content>
      </S.ContentBox>
    </S.ServiceEndPage>
  );
}

export default ServiceEndPage;