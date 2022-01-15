import styled from "styled-components";

interface textShadowVisibleProps {
  textShadowVisible: boolean;
}

export const MainBox = styled.div`
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bbb;
  * {
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-top: 225px;
  margin-bottom: 66px;
`;

export const Pink = styled.span`
  color: #ff7bab;
  font-weight: bold;
`;

export const LoginBox = styled.div`
  width: 549px;
  height: 400px;
  box-sizing: border-box;
  background-color: #ffd8e6;
  border-radius: 20px;
  border-bottom: 5px solid #885252;
  padding: 50px 80px;
  margin-bottom: 56px;
`;

export const Choose = styled.h2`
  display: inline-block;
  text-align: center;
  font-size: 20px;
  width: 50%;
  cursor: pointer;
  color: white;
  text-shadow: 2px 2px 2px #fd5793;
`;

export const Button = styled.div`
  width: 549px;
  height: 74px;
  background-color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  border-bottom: 5px solid #885252;
  font-weight: bold;
  font-size: 20px;
  color: #fd5793;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  text-align: center;
  line-height: 74px;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  color: #fd5793;
`;

export const Input = styled.input`
  width: 389px;
  height: 46px;
  box-sizing: border-box;
  background: #ffffff;
  border: 3px dashed rgba(134, 79, 79, 0.98);
  border-radius: 30px;
  outline: 0;
  padding-left: 40px;
  font-size: 12px;
`;
