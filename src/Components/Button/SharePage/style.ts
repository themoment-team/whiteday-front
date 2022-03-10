import styled from "styled-components";
import device from "../../../Shared/Config";

export const Button = styled.div`
  width: 90%;
  height: 70px;
  background-color: #fd5793;
  margin: 5vh auto 0;
  border-radius: 30px;
  box-shadow: 0 5px 0px #ffffff;
  &:hover {
    cursor: pointer;
  }
  @media ${device.mobile} {
    height: 6vh;
  }
`;

export const Desc = styled.p`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  line-height: 70px;
  margin: 0;
  @media ${device.mobile} {
    line-height: 6vh;
    font-size: 4vw;
  }
`;
