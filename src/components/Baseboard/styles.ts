import { styled } from "styled-components";
import fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Content = styled.div<{isMobile: boolean}>`
    width: 100vw;
    height: 100px;
    bottom: 0;
    left: 0;
    position: ${props => props.isMobile ? "static" : "fixed"};
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.lightBlue};
    margin-top: 100px;
`;

export const Title = styled.div`
    margin-top: 22px;
`;

export const Description = styled.p`
    font-family: ${fonts.montserrat};
    font-weight: 500;
    font-size: 1rem;
    bottom: 10px;
    color: ${theme.black};
`;