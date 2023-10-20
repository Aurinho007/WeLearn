import { styled } from "styled-components";
import fonts from "../../assets/fonts/fonts"

export const Container = styled.div`
    border-bottom: ${(props) => (props.theme.accentColor)} 5px solid;
    width: 100%;
    height: 50px;
    padding: 2vh 0;
    display: grid;
    grid-template-columns: auto auto auto;
    flex-direction: row;
    align-items: center;
`;    

export const Title = styled.p`
    font-family: ${fonts.roboto};
    font-style: italic;
    font-weight: 800;
    font-size: 2.5rem;
    margin: 0;
    color: ${(props) => (props.theme.primaryText)};
    justify-self: left;
`;


export const NavConteiner = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-self: center;
`;

export const NavItem = styled.p`
    font-family: ${fonts.montserrat};
    font-weight: 600;
    font-size: 1.5rem;
    color: ${(props) => (props.theme.primaryText)};
    margin: 0;

`;

export const NavSeparator = styled.p`
    font-family: ${fonts.montserrat};
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => (props.theme.accentColor)};
    padding: 0 3vh;
    margin: 0;

`;

export const ProfileConteiner = styled.div`
    width: 120px;
    height: 110%;
    border: ${(props) => (props.theme.primaryText)} solid 2px;
    border-radius: 10px;
    justify-self: right;
`;
