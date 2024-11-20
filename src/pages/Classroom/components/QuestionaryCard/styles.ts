import { styled } from "styled-components";
import fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  border: solid 2px ${theme.blue};
  height: 70px;
  border-radius: 8px;
  padding: 8px 16px;
  color: ${theme.black};
  cursor: pointer;
  margin-bottom: 15px;
  width: 90%;
  transition: ease 500ms;

  &:hover {  
    transform: scale(1.05);
    box-shadow: 0px 6px 20px -3px rgba(0,0,0,0.25);  
   } 
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  font-family: ${fonts.montserrat};
  font-weight: 500;
  font-size: 1.3rem;
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px ${theme.black};
  border-radius: 4px;
  width: 20px;
  height: 20px;
`;

const CheckIcon = styled.img`
    width: 20px;
`;

const DescriptionContainer = styled.div`
  width: 80%;
  line-height: 20px;
`;

const Description = styled.p`
  font-family: ${fonts.montserrat};
  font-weight: 350;
  font-size: 1.1rem;
  text-align: left;
`;

export { Card, TitleContainer, Title, Checkbox, CheckIcon, DescriptionContainer, Description };