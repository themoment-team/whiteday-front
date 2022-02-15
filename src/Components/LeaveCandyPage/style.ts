import styled from "styled-components";
import device from "../../Shared/Config";

export const Main = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffecdb;
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const Combine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media ${device.mobile} {
    height: auto;
  }
`;

export const Title = styled.h1`
  color: #fd5793;
  background: none;
  text-shadow: 3px 3px 0 #fff;
  margin: 0 0 30px;

  span {
    @media (max-width: 350px) {
      display: block;
    }
  }
`;

export const ColorBox = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  width: 80%;
  padding: 70px;
  border-radius: 20px;
  border: 4px dashed #885252;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  align-items: center;

  @media ${device.mobile} {
    padding: 20px 5px;
  }
`;

export const Candy = styled.div`
  margin: 0 auto;
  border-radius: 100%;
  cursor: pointer;
  width: 80px;
  height: 80px;

  ${(props: { focus: boolean }) => props.focus && "border: 2px solid #FD5793;"}

  @media (max-width: 370px) {
    width: 50px;
    height: 50px;
  }
`;

export const Circle = styled.div`
  max-width: 500px;
  max-height: 500px;
  width: 60vh;
  height: 60vh;
  background: #fff;
  border-radius: 100%;
  border: 3px solid #fd5793;
  box-shadow: inset 0 0 20px #fd5793;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.mobile} {
    width: 90vw;
    height: 90vw;
  }
`;

export const InputNickname = styled.input`
  background: none;
  border: none;
  width: 60%;
  height: 50px;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.5rem;
  outline: none;
  text-align: center;
  margin-bottom: 10px;

  &::placeholder {
    color: #b0b0b0;
    font-size: 1rem;
  }
`;

export const MessageInput = styled.textarea`
  border: 4px dashed #885252;
  background: none;
  resize: none;
  width: 55%;
  height: 40%;
  border-radius: 20px;
  text-align: center;
  padding: 20px;
  font-weight: 700;
  font-family: inherit;
  font-size: 1.1rem;
  outline: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::placeholder {
    color: #b0b0b0;
    font-size: 1rem;
  }
`;

export const NextButton = styled.button`
  width: 80%;
  min-height: 50px;
  border: none;
  border-radius: 30px;
  background: #fff;
  font-size: 20px;
  font-weight: 700;
  color: #fd5793;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  margin-top: 10vh;
  ${({ shadowBlack }: { shadowBlack: boolean }) =>
    shadowBlack
      ? "box-shadow: 0px 3px 0 #fd5793;"
      : "box-shadow: 0px 3px 5px rgba(0,0,0,0.7);"}

  &:active {
    background: #e2e2e2;
    transform: scale(0.95);
    transition: 0.1s;
  }
`;
