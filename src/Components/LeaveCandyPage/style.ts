import styled from "styled-components";
import device from "../../Shared/Config";

export const Main = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background: #ffecdb;
  ${(props: { isBottom: boolean }) =>
    props.isBottom && "background: linear-gradient(#ffecdb 70%, #885252 30%);"}
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const Position = styled.div`
  width: 600px;
  height: 100vh;
  @media ${device.mobile} {
    width: 100vw;
  }
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fd5793;
  background: none;
  text-shadow: 3px 3px 0 #fff;
  margin: 0;

  span {
    @media (max-width: 350px) {
      display: block;
    }
  }
`;

export const ColorBox = styled.div`
  background-color: #fff;
  width: 80%;
  height: 33%;
  border-radius: 20px;
  border: 4px dashed #885252;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  align-items: center;
`;

export const CandyColor = styled.div`
  margin: 0 auto;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s;
  width: 80px;
  height: 80px;
  @media (max-width: 370px) {
    width: 65px;
    height: 65px;
  }

  &:active {
    transform: scale(1.3);
  }
`;

export const CandyShape = styled.div`
  margin: 0 auto;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s;
  width: 80px;
  height: 80px;
  @media (max-width: 370px) {
    width: 65px;
    height: 65px;
  }

  &:active {
    transform: scale(1.3);
  }
`;

export const Circle = styled.div`
  width: 500px;
  height: 500px;
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
  height: 50px;
  border: none;
  border-radius: 30px;
  background: #fff;
  font-size: 20px;
  font-weight: 700;
  color: #fd5793;
  font-family: inherit;
  cursor: pointer;
  outline: none;

  @media ${device.mobile} {
    margin-top: 50px;
  }
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
