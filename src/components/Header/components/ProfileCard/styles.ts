import { styled } from "styled-components";
import { Link } from "react-router-dom";
import fonts from "../../../../assets/fonts/fonts";
import theme from "../../../../assets/theme";

export const ProfileConteiner = styled(Link)<{isStudent: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    text-decoration: none; 
    color: ${theme.black};
    border: ${props => props.isStudent ? `${theme.black} solid 1.8px` : ""};
    border-radius: 10px;
    padding: 3px 0;
`;


export const WeCoinContainer = styled.div`
    margin: 0 8px;
`;

export const WeCoinLabel = styled.p`
    font-family: ${fonts.montserrat};
    font-weight: 500;
    font-size: .8rem;
    padding: 2px;
`;

export const WeCoin = styled.p`
    text-align: center;
    font-family: ${fonts.montserrat};
    font-weight: 500;
    font-size: 1.5rem;
`;

export const ImageContainer = styled.div`
    margin: 3px 10px;
`;

export const Image = styled.img<{isStudent: boolean}>`
    width: ${props => props.isStudent ? "2.1rem" : "2.5rem"};
`;