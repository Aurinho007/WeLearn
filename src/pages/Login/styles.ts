import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 800px;
  width: 1200px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.1);
  margin-top: -50px;
  border-radius: 20px;
`;