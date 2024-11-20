import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";
import { handleClick } from '../../components/Buttons/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const QuestionsHeader = styled.div<{break: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: ${props => props.break ? "row" : "column"};
  }
`;

export const Title = styled.div`
  font-family: ${Fonts.poppins};
  font-weight: 500;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;


export const TableContainer = styled.div`
  background-color: ${theme.white};
  border: solid 2px ${theme.blue};
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
  z-index: 1;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px 0;
  align-items: center;
`;

export const HeaderItem = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Separator = styled.div`
  border: solid 2px ${theme.blue};
  margin: 10px 0;
`;

export const Line = styled.div<{showOptions: boolean}>`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 15px 0;
  align-items: center;
  border-radius: 10px;
  position: relative;

  &:hover {
    background-color: ${theme.lightBlue};
  }

  & .dropdown {
    display: ${props => props.showOptions ? "block" : "none"};
    /* display: block; */
  }
`;

export const Item = styled.p`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;


  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ItemAction = styled.div`
  position: absolute;
  right: 0;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  transform: rotate(90deg);
  z-index: 999;
  
  &:hover .dropdown {
    display: block;
  }

  @media (max-width: 768px){
    right: -10px;
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  bottom: -100px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 999;
  transform: rotate(-90deg);

`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 10px;
  
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

