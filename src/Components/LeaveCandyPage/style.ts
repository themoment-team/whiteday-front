import styled from "styled-components";
import device from "../../Shared/Config";

export const Main = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
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

  span {
    @media (max-width: 320px) {
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

export const NextButton = styled.button`
  width: 80%;
  height: 50px;
  border: none;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 3px 0 #fd5793;
  font-size: 20px;
  font-weight: 700;
  color: #fd5793;
  font-family: inherit;
  margin-top: 100px;
  cursor: pointer;
  outline: none;

  &:active {
    background: #e2e2e2;
    transform: scale(0.95);
    transition: 0.1s;
  }
`;
