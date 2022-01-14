import styled from "styled-components";

interface brownBoxVisibleProps {
  visible: boolean;
}

export const Background = styled.div`
  width: 600px;
  margin: 0 auto;
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
`;

export const PinkBackground = styled.div<brownBoxVisibleProps>`
  width: 100%;
  height: ${({visible})=> (visible ? 65 : 100)}vh;
  background-color: #ffecdb;
`;

export const BrownBackground = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #885252;
`;