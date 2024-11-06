import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 750px;
  width: 1200px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.1);
  border-radius: 20px;

  @media (max-width: 480px) {
    border-radius: 10px;
  }
`;