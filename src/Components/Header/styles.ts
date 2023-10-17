import { styled } from "styled-components";
import fonts from "../../assets/fonts/fonts"

export const Container = styled.div`
    border-bottom: ${(props) => (props.theme.accentColor)} 5px solid;
    width: 100%;
    padding: 18px 0;
`;    

export const Title = styled.p`
    font-family: ${fonts.roboto};
    font-style: italic;
    font-weight: 800;
    font-size: 2.5rem;
    margin: 0;
    color: ${(props) => (props.theme.primaryText)}
`;