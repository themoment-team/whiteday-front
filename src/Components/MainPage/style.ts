import styled from "styled-components";
import device from "../../Shared/Config";

export const MainPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const Explanation = styled.div`
  position: relative;
  top: 10vh;
  text-align: center;
  z-index: 1;
  font-weight: bold;
  color: #885252;
`;

export const UserExplanation = styled.p`
  font-size: 30px;
  margin: 0;
  @media ${device.mobile} {
    font-size: 5vw;
  }
`;

export const CountExplanation = styled.p`
  font-size: 24px;
  margin: 0;
  @media ${device.mobile} {
    font-size: 4vw;
  }
`;

export const Pink = styled.span`
  color: #ff94bb;
`;

export const CandyMachine = styled.img`
  width: 100%;
  position: relative;
  z-index: 1;
  top: 43vh;
  transform: translateY(-50%);
`;