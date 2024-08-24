import { styled } from "styled-components";
import { Link } from "react-router-dom";
import fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const NavConteiner = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-self: center;
    color: ${theme.black};
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

`;

export const NavSeparator = styled.p`
    font-family: ${fonts.montserrat};
    font-size: 2rem;
    font-weight: 700;
    padding: 0 3vh;
    margin: 0;
    color: ${theme.blue}
`;