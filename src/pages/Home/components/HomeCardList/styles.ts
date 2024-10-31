import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 810px){
    justify-content: center;
  }
  
  @media (min-width: 810px){
    margin-top: 80px;
  }
`;