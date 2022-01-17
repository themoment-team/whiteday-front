import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../Assets/SVG";
import Background from "../Background";
import axios from "axios";

const SignUp: React.FC = () => {
  const value = [
    {
      name: "닉네임",
      placeholder: "특수문자를 제외한 10자 이내",
      maxLength: 10,
    },
    { name: "아이디", placeholder: "영문, 숫자를 포함한 5자 이상" },
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
  ];
  return (
    <>
      <S.InputSection>
        {value.map((value, index) => {
          return (
            <>
              <S.Name>{value.name}</S.Name>
              <S.Input
                placeholder={value.placeholder}
                type={value.type}
                maxLength={value.maxLength}
                minLength={value.minLength}
              ></S.Input>
            </>
          );
        })}
      </S.InputSection>
    </>
  );
};

const SignIn: React.FC = () => {
  const value: any = [
    { name: "아이디", placeholder: "" },
    { name: "비밀번호", placeholder: "", type: "password" },
  ];
  return (
    <S.InputSection>
      {value.map((value: any, index: number) => {
        return (
          <>
            <S.Name>{value.name}</S.Name>
            <S.Input
              placeholder={value.placeholder}
              type={value.type}
            ></S.Input>
          </>
        );
      })}
    </S.InputSection>
  );
};

const TryJoin = async () => {
  // try {
  //   const res: any = await axios.post("/join");
  // } catch (err) {
  //   console.log(err);
  // }
};

const TryLogin = async () => {
  // try {
  //   const res: any = await axios.post("/login");
  // } catch (err) {
  //   console.log(err);
  // }
};

const HelloWorldPage: React.FC = () => {
  const [login, setLogin] = useState(false);
  return (
    <S.MainBox>
      <Background brownBoxVisible={false} />
      <S.Title active={login}>
        캔디머신<S.Pink>에</S.Pink> 사탕<S.Pink>을 담아봐</S.Pink>
      </S.Title>
      <S.LoginBox active={login}>
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
          }}
        >
          로그인
        </S.Choose>
        {!login ? <SignUp /> : <SignIn />}
        <I.MiniCandy />
      </S.LoginBox>
      {!login ? (
        <S.Button onClick={TryJoin}>캔디머신 생성하기</S.Button>
      ) : (
        <S.Button onClick={TryLogin}>사탕 채우러 가기</S.Button>
      )}
    </S.MainBox>
  );
};

export default HelloWorldPage;
