import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/SVG";
import axios from "axios";

const TryJoin = async () => {
  try {
  } catch (err) {}
};

const TryLogin = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const HelloWorldPage: React.FC = () => {
  return (
    <S.HelloWorldPage>
      <S.Title>
        캔디머신<S.Pink>에</S.Pink> 사탕<S.Pink>을 담아봐!</S.Pink>
      </S.Title>
      <S.LoginBox>
        <S.SubTitle>로그인</S.SubTitle>
        <S.LoginButton>
          <I.GithubLogo />
          <S.Name>GitHub로 로그인 하기</S.Name>
        </S.LoginButton>
        <S.LoginButton>
          <I.GoogleLogo />
          <S.Name>Google로 로그인 하기</S.Name>
        </S.LoginButton>
        <div className="MiniCandy">
          <I.MiniCandy />
        </div>
      </S.LoginBox>
    </S.HelloWorldPage>
  );
};

export default HelloWorldPage;
