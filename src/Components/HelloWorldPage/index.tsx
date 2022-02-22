import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/SVG";
import axios from "axios";

const SignUp: React.FC = () => {
  const value = [
    {
      name: "아이디",
      placeholder: "영문, 숫자를 포함한 5자 이상",
      minLength: 5,
    },
    {
      name: "비밀번호",
      placeholder: "영문, 숫자를 포함한 4~20자 이내",
      type: "password",
      maxLength: 20,
      minLength: 4,
    },
    {
      name: "비밀번호 확인",
      placeholder: "",
      type: "password",
      maxLength: 20,
      minLength: 4,
    },
    {
      name: "닉네임",
      placeholder: "특수문자를 제외한 10자 이내",
      maxLength: 10,
    },
  ];

  return (
    <>
      {value.map((value, index) => (
        <div key={index}>
          <S.Name>{value.name}</S.Name>
          <S.Input
            placeholder={value.placeholder}
            type={value.type}
            maxLength={value.maxLength}
            minLength={value.minLength}
            onChange={(e) => (joinData[index] = e.target.value)}
          ></S.Input>
        </div>
      ))}
    </>
  );
};

const SignIn: React.FC = () => {
  const value = [
    { name: "아이디", placeholder: "" },
    { name: "비밀번호", placeholder: "", type: "password" },
  ];
  return (
    <>
      {value.map((value: any, index: number) => (
        <div key={index}>
          <S.Name>{value.name}</S.Name>
          <S.Input
            placeholder={value.placeholder}
            type={value.type}
            onChange={(e) => (loginData[index] = e.target.value)}
          ></S.Input>
        </div>
      ))}
    </>
  );
};

const joinData: Array<String> = [];
const TryJoin = async () => {
  console.log(joinData);
  try {
    const res = await axios.post("/join", {
      id: joinData[0],
      password: joinData[1],
      name: joinData[3],
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const loginData: Array<String> = [];
const TryLogin = async () => {
  console.log(loginData);
  try {
    const res = await axios.post("/login", {
      id: loginData[0],
      password: loginData[1],
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const HelloWorldPage: React.FC = () => {
  const [login, setLogin] = useState(false);
  const [signupShadow, setSignupShadow] = useState(true);
  const [signinShadow, setSigninShadow] = useState(false);
  return (
    <S.HelloWorldPage>
      <S.Title active={login}>
        캔디머신<S.Pink>에</S.Pink> 사탕<S.Pink>을 담아봐!</S.Pink>
      </S.Title>
      <S.LoginBox active={login}>
        <S.ChooseSection>
          <S.Choose
            pinkShadow={signupShadow}
            onClick={() => {
              setLogin(false);
              setSignupShadow(true);
              setSigninShadow(false);
            }}
          >
            회원가입
          </S.Choose>
          <S.Choose
            pinkShadow={signinShadow}
            onClick={() => {
              setLogin(true);
              setSigninShadow(true);
              setSignupShadow(false);
            }}
          >
            로그인
          </S.Choose>
        </S.ChooseSection>
        {login ? <SignIn /> : <SignUp />}
        <I.MiniCandy />
      </S.LoginBox>
      {login ? (
        <S.Button onClick={TryLogin}>사탕 채우러 가기</S.Button>
      ) : (
        <S.Button onClick={TryJoin}>캔디머신 생성하기</S.Button>
      )}
    </S.HelloWorldPage>
  );
};

export default HelloWorldPage;
