import styled from "styled-components";
import { Link } from "react-router-dom";
import fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Container = styled.div`
  border-bottom: ${theme.blue} 5px solid; 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media (max-width: 810px) {
    padding: 10px 0;
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

export const Title = styled(Link)`
  text-decoration: none;
  font-family: ${fonts.poppins};
  font-style: italic;
  font-weight: 800;
  font-size: 2.5rem;
  margin: 0;
  color: ${theme.black};
  justify-self: left;

  @media (max-width: 810px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
