import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";

export const ClassroomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;


  @media (max-width: 768px) {
     flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin: -30px 0 40px 0
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;


  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 768px){
    gap: 50px;
  }
`;

export const Title = styled.p`
  font-family: ${Fonts.poppins};
  font-weight: 500;
  font-size: 1.8rem;

  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    width: 100%;
    text-align: left;
  }
`;

export const QuestionaryContainer = styled.div`
  height: 480px;
  overflow-y: visible;
  overflow-x: hidden;
  padding: 5px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    overflow: none;
    margin-bottom: 40px;
  }
`;