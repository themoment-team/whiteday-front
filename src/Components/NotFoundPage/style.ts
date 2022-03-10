import styled from "styled-components";
import device from "../../Shared/Config";

export const NotFoundPage = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #ffecdb;
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const ContentBox = styled.div`
  border-top: 5px dashed #885252;
  border-bottom: 5px dashed #885252;
  width: 100%;
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 45%;
`;

export const NotFoundImg = styled.img`
  width: 100%;
`
export const Explaination = styled.p`
  text-align: center;
  font-size: 20px;
  color: #885252;
  margin: 0;
  margin-top: 30px;
  @media ${device.mobile}{
    font-size: 13px;
  }
  @media (max-width: 300px){
    font-size: 10px;
  }
`;