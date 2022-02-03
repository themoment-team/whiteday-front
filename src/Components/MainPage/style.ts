import styled from "styled-components";
import device from "../../Shared/Config";

const desktop = "(min-width: 600px)"

export const MainPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(#ffecdb 65%, #885252 35%);
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    width: 100vw;
    background: linear-gradient(#ffecdb 60%, #885252 40%);
  }
  @media ${desktop} {
    min-height: 950px;
  }
`;

export const Content = styled.div`
  width: 100%;
`

export const Explanation = styled.div`
  text-align: center;
  font-weight: bold;
  color: #885252;
  margin-bottom: 4vh;
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
  color: #ff639b;
`;

export const Title = styled.img`
  width: 33%;
  margin: 0 auto;
`

export const TitleExplanation = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 0;
  color: #ff639b;
  @media ${device.mobile} {
    font-size: 3vw;
  }
`;

export const CandyMachine = styled.img`
  width: 100%;
`;