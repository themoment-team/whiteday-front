import styled from "styled-components";
import device from "../../Shared/Config";

export const Background = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
  position: absolute;
  @media ${device.mobile} {
    width: 100vw;
  }
`;

export const PinkBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffecdb;
`;

export const BrownBackground = styled.div`
  width: 100%;
  height: 35vh;
  position: relative;
  top: 65vh;
  background-color: #885252;
`;