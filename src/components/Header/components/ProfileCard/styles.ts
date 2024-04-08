import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../../../assets/fonts/fonts';
import theme from '../../../../assets/theme';

export const ProfileConteiner = styled(Link)`
    text-decoration: none; 
    border: ${theme.black} solid 1.5px;
    border-radius: 10px;
    color: ${theme.black};
    justify-self: right;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3px 0;
`;


export const WeCoinContainer = styled.div`
    margin: 0 10px;
`;

export const WeCoinLabel = styled.p`
    margin: 0;
    font-family: ${fonts.montserrat};
    font-weight: 500;
    font-size: .8rem;
    padding: 2px;
`;

export const WeCoin = styled.p`
    margin: 0;
    text-align: center;
    font-family: ${fonts.montserrat};
    font-weight: 600;
    font-size: 1.7rem;
`;

export const ImageContainer = styled.div`
    margin: 3px 10px;
`;

export const Image = styled.img`
    width: 4.5vh;
    margin: 0;
`;