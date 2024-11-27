import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1270px){
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
  }
  
  @media (max-width: 810px){
    justify-content: center;
  }
  
  @media (min-width: 810px){
    margin-top: 80px;
  }
`;