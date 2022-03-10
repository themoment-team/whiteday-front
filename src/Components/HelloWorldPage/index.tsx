import React from "react";
import * as S from "./style";
import * as I from "../../Assets/SVG";
import { baseUrl } from "../../Shared/Config";

const HelloWorldPage: React.FC = () => {
  return (
    <S.HelloWorldPage>
      <S.Title>
        캔디머신<S.Pink>에</S.Pink> 사탕<S.Pink>을 담아봐!</S.Pink>
      </S.Title>
      <S.LoginBox>
        <S.SubTitle>로그인</S.SubTitle>
        <a href={`${baseUrl}/oauth2/authorization/github`}>
          <S.LoginButton>
            <I.GithubLogo />
            <S.Name>GitHub로 로그인 하기</S.Name>
          </S.LoginButton>
        </a>
        <a href={`${baseUrl}/oauth2/authorization/google`}>
          <S.LoginButton>
            <I.GoogleLogo />
            <S.Name>Google로 로그인 하기</S.Name>
          </S.LoginButton>
        </a>
        <div className="MiniCandy">
          <I.MiniCandy />
        </div>
      </S.LoginBox>
    </S.HelloWorldPage>
  );
};

export default HelloWorldPage;
