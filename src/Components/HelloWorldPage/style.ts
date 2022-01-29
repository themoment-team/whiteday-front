import styled from "styled-components";
import device from "../../Shared/Config";

interface Login {
  active: boolean;
}

interface Shadow {
  pinkShadow: boolean;
}

export const HelloWorldPage = styled.div`
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
  width: 600px;
  background-color: #ffecdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  * {
    overflow-x: hidden;
  }
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const Title = styled.h1<Login>`
  font-size: 25px;
  margin-top: ${({ active }) => (active ? "170" : "92")}px;
  margin-bottom: 60px;
  color: #885252;
  text-align: center;
`;

export const Pink = styled.span`
  color: #ff7bab;
`;

export const LoginBox = styled.div<Login>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: ${({ active }) => (active ? "400" : "600")}px;
  background-color: #ffd8e6;
  border-radius: 20px;
  border-bottom: 5px solid #885252;
  margin-bottom: 28px;
  svg {
    position: absolute;
    left: 81%;
    top: ${({ active }) => (active ? "82" : "88")}%;
  }
  @media ${device.mobile} {
    width: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }
`;

export const ChooseSection = styled.div`
  width: 350px;
  margin: 50px 0 30px;
  @media ${device.mobile} {
    width: 270px;
  }
`;

export const Choose = styled.span<Shadow>`
  display: inline-block;
  width: 50%;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  color: white;
  text-shadow: ${({ pinkShadow }) =>
    pinkShadow ? "2px 2px 2px #fd5793" : null};
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
  margin-bottom: 40px;
  font-family: "yg-jalnan";

  &::placeholder {
    font-family: "yg-jalnan";
    color: #b0b0b0;
  }

  @media ${device.mobile} {
    width: 300px;
  }

  @media (max-width: 450px) {
    width: 250px;
  }
`;

export const Button = styled.div`
  width: 549px;
  height: 74px;
  background-color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  border-bottom: 5px solid #885252;
  font-size: 20px;
  color: #fd5793;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  line-height: 74px;
  @media (max-height: 920px) {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    width: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
  }
`;
