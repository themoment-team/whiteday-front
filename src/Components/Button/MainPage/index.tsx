import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedAtom } from "../../../Atoms";
import api from "../../../lib/api";

const MainPageButton: React.FC = () => {
  const logged = useRecoilValue(loggedAtom);
  const [URI, setURI] = useState<string>("");

  useEffect(() => {
    api.get("/v1/login/info").then((response) => {
      setURI(response.data.data.member.uri);
    });
  }, []);

  const copy = () => {
    console.log(URI);
    navigator.clipboard.writeText(`https://whiteday.the-moment.org/${URI}`);
  };

  return (
    <S.Button>
      {logged ? (
        <S.Desc onClick={copy}>캔디 머신 공유하기</S.Desc>
      ) : (
        <Link to="/helloWorld">
          <S.Desc>내 캔디 머신 만들러가기</S.Desc>
        </Link>
      )}
    </S.Button>
  );
};

export default MainPageButton;
