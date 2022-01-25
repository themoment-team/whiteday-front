import styled from "styled-components";
import device from "../../Shared/Config";

export const NotFoundPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const ContentBox = styled.div`
  border-top: 5px dashed #885252;
  border-bottom: 5px dashed #885252;
  width: 100%;
  height: 92%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`

`;

export const NotFoundImg = styled.img`
  width: 45%;
  display: block;
  margin: 0 auto;
`
export const Explaination = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #885252;
  margin: 0;
  margin-top: 30px;
  @media ${device.mobile}{
    font-size: 5vw;
  }
`;