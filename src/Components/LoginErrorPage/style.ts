import styled from "styled-components";
import device from "../../Shared/Config";

export const LoginErrorPage = styled.div`
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

export const ContentWrap = styled.div`
  border-top: 5px dashed #885252;
  border-bottom: 5px dashed #885252;
  width: 100%;
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  text-align: center;
  font-size: 30px;
  @media ${device.mobile} {
    font-size: 5vw;
  }
`

export const Text = styled.div`
  color: #885252;
`;

export const Home = styled.div`
  color: #fd5793;
`;