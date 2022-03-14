import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedAtom } from "../../../Atoms";
import api from "../../../lib/api";
import { toast } from "react-toastify";

const MainPageButton: React.FC = () => {
  const logged = useRecoilValue(loggedAtom);
  const [URI, setURI] = useState<string>("");

  useEffect(() => {
    api.get("/v1/login/info").then((response) => {
      setURI(response.data.data.member.uri);
    });
  }, []);

  const copy = () => {
    navigator.clipboard.writeText(`https://www.givecandy.me/${URI}`).then(() =>
      toast.success("클립보드에 내 캔디머신이 복사되었어요!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }),
    );
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
