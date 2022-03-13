import styled from "styled-components";
import device from "../../Shared/Config";

export const WaitingPage = styled.div`
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
`;

export const Content = styled.div`
  border-top: 5px dashed #885252;
  border-bottom: 5px dashed #885252;
  width: 100%;
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  font-size: 30px;
  color: #FD5793;
  @media ${device.mobile}{
    font-size: 5vw;
  }
`;