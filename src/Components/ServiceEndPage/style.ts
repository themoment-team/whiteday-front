import styled from "styled-components";
import device from "../../Shared/Config";

const desktop = "(min-width: 600px)";

export const ServiceEndPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffecdb;
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    width: 100vw;
  }
  @media ${desktop} {
    min-height: 700px;
  }
`;

export const ContentBox = styled.div`
  border-top: 5px dashed #885252;
  border-bottom: 5px dashed #885252;
  width: 100%;
  height: 92%;
  display: flex;
  align-items: flex-end;
  @media ${device.mobile} {
    align-items: center;
  }
  @media ${desktop} and (max-height: 700px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  @media ${device.mobile} {
    top: 0;
  }
`;

export const Logo = styled.img`
  width: 85%;
  display: block;
  margin: 0 auto;
  position: relative;
`;

export const Explaination = styled.p`
  margin-top: 3vh;
  margin-bottom: 0;
  color: #885252;
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  @media ${device.mobile} {
    font-size: 3vw;
  }
`;

export const TeamExplainationBox = styled.div`
  color: #885252;
  margin-top: 18vh;
  margin-bottom: 3vh;
  font-size: 10px;
  @media ${device.mobile} {
    top: 30%;
  }
`;

export const TeamExplaination = styled.div`
  width: 210px;
  margin: 0 auto;
  p {
    margin: 0;
  }
`;

export const TeamName = styled.p`
  position: relative;
  bottom: 52px;
  display: inline-block;
`;

export const ExplainMembers = styled.p`
  position: relative;
  display: inline-block;
  left: 8%;
`;

export const Copyright = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  text-align: center;
`;
