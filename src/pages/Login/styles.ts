import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 600px;
  width: 1000px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.1);
  border-radius: 20px;
  
  @media (max-width: 480px) {
    box-shadow: none;
    background-color: transparent;
    margin-top: -150px;
  }
`;
