import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 480px) {
   align-items: flex-start;
  }
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
  }
`;
