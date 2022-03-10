import styled from "styled-components";
import device from "../../Shared/Config";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  width: 550px;
  height: 550px;
  box-shadow: inset 4px 4px 20px #ff7bab;
  background-color: #ffffff;
  border: 4px solid #fd5793;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
    height: 350px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 35px;
  align-items: center;

  svg {
    cursor: pointer;
  }

  @media (max-width: 450px) {
    margin-bottom: 20px;
  }
`;

export const Name = styled.div`
  font-size: 20px;
  margin-right: 20px;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  border: 4px dashed #885252;
  width: 340px;
  height: 300px;
  border-radius: 20px;
  text-align: center;
  padding: 28px 14px;
  box-sizing: border-box;
  font-size: 15px;

  @media ${device.mobile} {
    width: 280px;
    height: 250px;
    font-size: 12px;
  }

  @media (max-width: 450px) {
    width: 230px;
    height: 210px;
    padding: 16px 10px;
    overflow-y: scroll;
  }
`;
