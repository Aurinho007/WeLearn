import { styled } from "styled-components";
import fonts from "../../assets/fonts/fonts"

export const Title = styled.h1`
    font-family: ${fonts.roboto};
    font-style: italic;
    font-weight: 800;
    font-size: 2.5rem;
    margin: 0;
    color: ${(props) => (props.theme.primaryText)}
`;
