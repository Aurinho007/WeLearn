import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const QuestionsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
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
  z-index: 999999;
  transform: rotate(-90deg);

`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 10px;
  z-index: 999999;

  
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const AlertContainer = styled.div<{visible: boolean}>`
  display: ${props => props.visible ? "flex" : "none"};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.5);
  z-index: 999;
`;

export const Alert = styled.div`
  max-width: 450px;
  width: 80%;
  padding: 20px;
  background-color: ${theme.lightWhite};
  border: solid ${theme.blue} 4px;
  border-radius: 10px;
  margin-top: -200px;
`;

export const AlertTitle = styled.p`
  font-size: 1.4rem;
  font-family: ${Fonts.poppins};
  font-weight: 500;
  margin-bottom: 3px;
`;

export const AlertSubTitle = styled.p`
  font-size: 1rem;
  font-family: ${Fonts.poppins};
  font-weight: 300;
  color: ${theme.grey};
  margin-bottom: 15px;
`;

export const AlertBtn = styled.div`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;


export const IaContainer = styled.div<{visible: boolean}>`
  display: ${props => props.visible ? "flex" : "none"};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.5);
  z-index: 999;
`;

export const IaModal = styled.div`
  max-width: 450px;
  width: 80%;
  padding: 20px;
  background-color: ${theme.lightWhite};
  border: solid ${theme.blue} 4px;
  border-radius: 10px;
  margin-top: -200px;
`;

export const FieldIaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`;

export const LabelIa = styled.p`
  font-family: ${Fonts.montserrat};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const InputIa = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  box-shadow: none;
  height: 30px;
  border-bottom: solid 4px ${theme.blue};
  margin-top: 5px;
  font-size: 1rem;
  font-family: ${Fonts.montserrat};
`;

export const DropDownIa = styled.select`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  box-shadow: none;
  border: solid 3px ${theme.blue};
  margin-top: 12px;
  font-size: 1.2rem;
  font-family: ${Fonts.montserrat};
  padding: 8px 6px;
  border-radius: 8px;
`;

export const IaBtn = styled.div`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;
