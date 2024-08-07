import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";

export const ClassroomContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const Left = styled.div`
  margin-right: 30px;
`;

export const DataHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-family: ${Fonts.roboto};
  font-weight: 500;
  font-size: 2.2rem;
`;

export const QuestionaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr); 
  row-gap: 20px; 
  column-gap: 16px; 
  height: 530px;
  overflow: scroll;

`;