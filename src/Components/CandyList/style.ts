import styled from "styled-components";

interface chooseProps {
  choose: boolean;
}

export const CandyList = styled.div`
  margin: 6vh auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CandyListIndex = styled.span<chooseProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ choose }) => (choose ? "#FF5BA0" : "#FFFFFF")};
  border-radius: 100%;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
  }
`;