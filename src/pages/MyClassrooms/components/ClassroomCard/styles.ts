import { styled } from "styled-components";
import fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  border-left: solid 5px ${theme.blue};
  border-radius: 0 8px 8px 0;
  padding: 0 16px;
  width: 15%;
  min-width: 270px;
  color: ${theme.black};
  box-shadow: 0px 4px 15px -10px rgba(0,0,0,0.25);
  cursor: pointer;

  transition: ease-in-out 500ms;

  &:hover {  
    transform: scale(1.08);
    box-shadow: 0px 6px 20px -5px rgba(0,0,0,0.25);  
   }  

`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export const Title = styled.p`
  font-family: ${fonts.roboto};
  font-weight: 500;
  line-height: 1.2rem;
  font-size: 1.3rem;
`;

export const DataContainer = styled.div`
  font-size: 1.1rem;
`;

export const Line = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  width: 100%;
`;

export const Description = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 300;
  text-align: left;
  color: ${theme.grey};
  margin-right: 10px;
`;

export const Value = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 400;
`;

export const Bar = styled.div`
  margin: 15px 0;
  border: solid 2px ${theme.blue};
  border-radius: 6px;
  width: 100%;
  height: 18px;
  text-align: center;

`; 

export const FillBar = styled.div<{ conclusionPercent: number; }>`
  background-color: ${theme.blue};
  z-index: 0;
  width: ${props => props.conclusionPercent}%;
  height: 100%;
`;

export const PercentNumber = styled.p`
  color: ${theme.black};
  font-family: ${fonts.montserrat};
  font-weight: 500;
  margin-top: -17px;
`;