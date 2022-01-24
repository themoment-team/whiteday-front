import styled from "styled-components";
import device from "../../Shared/Config";

const maxHeight = "(max-height: 900px) and (min-width: 600px)";

export const MainPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  /* display: flex;
  align-items: center; */
  @media ${device.mobile} {
    width: 100vw;
  }
  @media ${maxHeight}{
    overflow: scroll;
    height: 900px;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  height: 750px;
  top: 7%;
`

export const Explanation = styled.div`
  position: relative;
  text-align: center;
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
  top: 5%;
  position: relative;
`;