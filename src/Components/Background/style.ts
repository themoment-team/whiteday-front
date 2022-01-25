import styled from "styled-components";
import device from "../../Shared/Config";

interface maxHeightType{
  maxHeight:number,
};

export const Background = styled.div<maxHeightType>`
  width: 600px;
  height: 100vh;
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
  position: absolute;
  @media ${device.mobile} {
    width: 100vw;
  }
  @media (max-height: ${({ maxHeight }) => maxHeight}px) and (min-width: 600px) {
    height: ${({ maxHeight }) => maxHeight}px;
  }
`;

export const PinkBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffecdb;
`;

export const BrownBackground = styled.div`
  width: 100%;
  height: 35%;
  position: relative;
  top: 65%;
  background-color: #885252;
`;
