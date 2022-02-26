import styled from "styled-components";
import device from "../../Shared/Config";

export const HelloWorldPage = styled.div`
  box-shadow: 4px 4px 100px 50px rgba(253, 87, 147, 0.25);
  max-width: 600px;
  background-color: #ffecdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100vh;

  @media (max-height: 920px) {
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  margin: 170px 0 60px;
  color: #885252;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 20px;
    margin-top: 100px;
  }
`;

export const Pink = styled.span`
  color: #ff7bab;
`;

export const LoginBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 400px;
  background-color: #ffd8e6;
  border-radius: 20px;
  border-bottom: 5px solid #885252;
  overflow: hidden;

  .MiniCandy {
    position: absolute;
    top: 80%;
    left: 80%;
  }

  @media (max-height: 920px) {
    margin-bottom: 220px;
  }

  @media ${device.mobile} {
    width: 450px;
  }

  @media (max-width: 450px) {
    width: 350px;
    height: 330px;
  }
`;

export const SubTitle = styled.div`
  margin: 45px 0 60px;
  text-align: center;
  font-size: 25px;
  color: #ffffff;
  text-shadow: 2px 2px 2px #fd5793;

  @media (max-width: 450px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

export const LoginButton = styled.div`
  width: 390px;
  height: 50px;
  background: #ffffff;
  border: 3px dashed rgba(134, 79, 79, 0.98);
  border-radius: 30px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${device.mobile} {
    width: 350px;
  }

  @media (max-width: 450px) {
    width: 280px;
    height: 38px;

    svg {
      width: 30px;
    }
  }
`;

export const Name = styled.span`
  color: #fd5793;
  font-size: 13px;
  margin-left: 18px;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;
