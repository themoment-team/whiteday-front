import styled from "styled-components";
import device from "../../Shared/Config";

export const MainPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  @media ${device.mobile} {
    width: 100vw;
    /* display: flex; */
    /* align-items: center; */
  }
`;

export const Explanation = styled.p`
  position: relative;
  top: 10vh;
  text-align: center;
  z-index: 1;
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  color: #885252;
`;

export const Pink = styled.span`
  color: #ff94bb;
`;

export const CandyMachine = styled.img`
  width: 100%;
  position: relative;
  top: 13vh;
  z-index: 1;
  @media ${device.mobile} {
    top: 17vh;
  }
`;