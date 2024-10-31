import styled from "styled-components";
import { Link } from "react-router-dom";
import fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  color: ${theme.black};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  font-family: ${fonts.montserrat};
  color: ${theme.black};
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 810px) {
    font-size: 1.2rem;
    margin: 10px 0;
  }
`;

export const NavSeparator = styled.p`
  font-family: ${fonts.montserrat};
  font-size: 2rem;
  font-weight: 700;
  padding: 0 3vh;
  margin: 0;
  color: ${theme.blue};

  @media (max-width: 768px) {
    display: none; /* Remove separador em mobile */
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 2.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: ${theme.black};
    margin-right: 20px;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 999;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    background-color: ${theme.white};
    position: absolute;
    top: 70px;
    right: 0;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 15px -10px rgba(0,0,0,0.25);


    & > *:last-child {
      border-top: 3px solid ${theme.blue}; 
      padding-top: 15px;
    }
  }
`;

