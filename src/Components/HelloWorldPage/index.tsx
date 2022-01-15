import React, { useState } from "react";
import * as S from "./style";

const SignIn: React.FC = () => {
  return (
    <S.InputSection>
      <>
        <S.Name>닉네임</S.Name>
        <S.Input placeholder="특수문자를 제외한 10자 이내"></S.Input>
      </>
      <>
        <S.Name>아이디</S.Name>
        <S.Input placeholder="영문, 숫자를 포함한 5자 이상"></S.Input>
      </>
      <>
        <S.Name>비밀번호</S.Name>
        <S.Input placeholder="영문, 숫자를 포함한 4~20자 이상"></S.Input>
      </>
      <>
        <S.Name>비밀번호 확인</S.Name>
        <S.Input></S.Input>
      </>
    </S.InputSection>
  );
};

const LogIn: React.FC = () => {
  return (
    <S.InputSection>
      <>
        <S.Name>아이디</S.Name>
        <S.Input></S.Input>
      </>
      <>
        <S.Name>비밀번호</S.Name>
        <S.Input></S.Input>
      </>
    </S.InputSection>
  );
};

const HelloWorldPage: React.FC = () => {
  const [login, setLogin] = useState(false);
  const [shadow, setShadow] = useState(false);
  return (
    <S.MainBox>
      <S.Title>
        캔디머신<S.Pink>에</S.Pink> 사탕<S.Pink>을 담아봐</S.Pink>
      </S.Title>
      <S.LoginBox>
        <S.Choose
          onClick={() => {
            setLogin(false);
          }}
        >
          회원가입
        </S.Choose>
        <S.Choose
          onClick={() => {
            setLogin(true);
            setShadow(true);
          }}
        >
          로그인
        </S.Choose>
        {!login ? <SignIn /> : <LogIn />}
      </S.LoginBox>
      {!login ? (
        <S.Button>캔디머신 생성하기</S.Button>
      ) : (
        <S.Button>사탕 채우러 가기</S.Button>
      )}
    </S.MainBox>
  );
};

export default HelloWorldPage;
