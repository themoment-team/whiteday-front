import styled from "styled-components";

interface candyType {
  color: string,
  index: number
}

export const CandyMachine = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("/Images/CandyMachine.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`

export const CandyBox = styled.div`
  width: 220px;
  height: 220px;
  position: relative;
  top: 100px;
`

export const Candy = styled.div<candyType>`
  width: 20%;
  height: 20%;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  position: relative;
  top: 0;
  left: ${({ index }) => index === (2 || 5) && "0"};
  right: ${({ index }) => index === (3 || 6) && "0"};
  ${({ index }) => index === (1 || 4 || 7) && "margin: 0 auto"}
`;