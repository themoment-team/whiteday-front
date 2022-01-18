import styled from "styled-components";
import device from "../../Shared/Config";

export const Main = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  @media ${device.mobile} {
    width: 100vw;
  }
`;
