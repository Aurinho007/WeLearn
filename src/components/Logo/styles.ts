import { styled } from "styled-components";
import { Link } from "react-router-dom";
import fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

const Title = styled(Link)`
    text-decoration: none;
    font-family: ${fonts.roboto};
    font-style: italic;
    font-weight: 900;
    font-size: 2rem;
    margin: 0;
    color: ${theme.black};
    letter-spacing: -1px; 
`;

export default Title;