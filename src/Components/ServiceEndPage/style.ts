import styled from "styled-components";
import device from "../../Shared/Config";

export const ServiceEndPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  @media ${device.mobile} {
    width: 100vw;
  }
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  border-top: 5px dashed #885252;
  border-bottom: 5px dashed #885252;
  width: 100%;
  height: 92vh;
  position: relative;
`;

export const Logo = styled.img`
  width: 85%;
  display: block;
  margin: 0 auto;
  position: relative;
  top: 25%;
`

export const ExplainationBox = styled.p`
  margin: 0;
  position: relative;
  top: 28%;
  color: #885252;
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  @media ${device.mobile} {
    font-size: 3vw;
  }
`;

export const Copyright = styled.p`
  color: #885252;
  position: relative;
  top: 60%;
  margin: 0;
  text-align: center;
  font-size: 10px;
`;