import * as S from "./style";

function LeaveMessage() {
  return (
    <S.Circle>
      <S.InputNickname
        type="text"
        placeholder="닉네임을 입력하세요 (10자 이내)"
        maxLength={10}
      />
      <S.MessageInput
        placeholder="달콤한 한 마디를 남겨주세요&#13;&#10;(150자 이내)"
        maxLength={150}
      />
    </S.Circle>
  );
}

export default LeaveMessage;
