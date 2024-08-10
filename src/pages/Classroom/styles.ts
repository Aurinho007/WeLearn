import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";

export const ClassroomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-family: ${Fonts.roboto};
  font-weight: 500;
  font-size: 2.2rem;
`;

export const QuestionaryContainer = styled.div`
  height: 430px;
  overflow: scroll;
`;