import { styled } from "styled-components";
import fonts from "../../assets/fonts/fonts";
import theme from "../../assets/theme";

export const Content = styled.div`
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.white};
    border-top: solid 5px ${theme.blue};
`;

export const Title = styled.div`
    margin-top: 22px;
`;

export const Description = styled.p`
    font-family: ${fonts.montserrat};
    font-weight: 500;
    font-size: 1rem;
    bottom: 10px;
    line-height: 35px;
    color: ${theme.black};
`;