import styled from "styled-components";
import device from "../../Shared/Config"

interface candyType {
  color: string
  index: number
  shape: string
}

export const CandyMachine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const CandyMachineImg = styled.img`
  width: 100%;
`

export const CandyBox = styled.div`
  width: 37%;
  height: 22.5%;
  position: absolute;
  top: 30%;
  @media (min-width: 600px){
    width: 220px;
    height: 240px;
  }
`

export const Candy = styled.div<candyType>`
  width: 21%;
  height: 12%;
  font-size: 8px;
  border-radius: 100%;
  text-align: center;
  background-color: ${({ color }) => color};
  background-image: ${({shape}) => shape !== "none" && `url("/Images/candyShape/${shape}.png")`};
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  padding-top: 7%;
  color: #885252;
  ${({ index }) => {
    switch (index) {
      case 0:
        return "top: 0; left: 42%;";
      case 1:
        return "top: 17%; left: -21%";
      case 2:
        return "top: 17%; left: 43%";
      case 3:
        return "top: 37%; left: -21%";
      case 4:
        return "top: 35%; left: 0%";
      case 5:
        return "top: 35%; left: 64%";
      case 6:
        return "top: 55%;";
    }
  }}
`;