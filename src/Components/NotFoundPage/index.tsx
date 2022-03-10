import React from "react";
import * as S from "./style"

const NotFoundPage: React.FC = () => {
  return (
    <S.NotFoundPage>
      <S.ContentBox>
        <S.Content>
          <S.NotFoundImg src="NotFound.png" />
          <S.Explaination>
            페이지를 찾을 수 없어요<br />
            주소를 다시 입력해보세요!
          </S.Explaination>
        </S.Content>
      </S.ContentBox>
    </S.NotFoundPage>
  )
}

export default NotFoundPage;