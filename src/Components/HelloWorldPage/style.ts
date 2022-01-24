import styled from "styled-components";
import device from "../../Shared/Config";

interface Login {
  active: boolean;
}

export const MainBox = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    margin: 0;
    padding: 0;
  }
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const Title = styled.h1<Login>`
  font-size: 25px;
  margin-top: ${({ active }) => (active ? "20" : "10")}vh;
  margin-bottom: 5vh;
  color: #885252;
  position: relative;
`;

export const Pink = styled.span`
  color: #ff7bab;
  font-weight: bold;
`;

export const LoginBox = styled.div<Login>`
  position: relative;
  width: 550px;
  height: ${({ active }) => (active ? "400" : "600")}px;
  box-sizing: border-box;
  background-color: #ffd8e6;
  border-radius: 20px;
  border-bottom: 5px solid #885252;
  padding: 5vh 80px 0;
  margin-bottom: 3vh;
  svg {
    position: absolute;
    left: 85%;
    top: ${({ active }) => (active ? "82" : "88")}%;
  }
  @media ${device.mobile} {
    width: 90vw;
    padding: 5vh 20px 0;
  }
`;

export const Choose = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 20px;
  width: 50%;
  cursor: pointer;
  color: white;
  text-shadow: 2px 2px 2px #fd5793;
  margin-bottom: 3.5vh;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  color: #fd5793;
  font-size: 15px;
  margin-left: 12px;
`;

export const Input = styled.input`
  width: 390px;
  height: 46px;
  box-sizing: border-box;
  background: #ffffff;
  border: 3px dashed rgba(134, 79, 79, 0.98);
  border-radius: 30px;
  outline: 0;
  padding-left: 40px;
  font-size: 12px;
  margin-bottom: 4vh;

  &::placeholder {
    font-family: "yg-jalnan";
    color: #b0b0b0;
  }

  font-family: "yg-jalnan";
`;

export const Button = styled.div`
  width: 549px;
  height: 74px;
  background-color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  border-bottom: 5px solid #885252;
  font-weight: bold;
  font-size: 20px;
  color: #fd5793;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  line-height: 7.9vh;
  @media ${device.mobile} {
    width: 90vw;
  }
`;
