import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../assets/fonts/fonts';
import theme from '../../assets/theme';

export const Container = styled.div`
    border-bottom: ${theme.blue} 5px solid;
    width: 100%;
    height: 50px;
    padding: 2vh 0;
    display: grid;
    grid-template-columns: auto auto auto;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled(Link)`
    text-decoration: none;
    font-family: ${fonts.roboto};
    font-style: italic;
    font-weight: 800;
    font-size: 2.5rem;
    margin: 0;
    color: ${theme.black};
    justify-self: left;
`;


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

export const ProfileConteiner = styled(Link)`
    text-decoration: none; 
    width: auto;
    height: auto;
    border: ${theme.black} solid 2px;
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
    font-weight: 400;
    font-size: .85rem;
`;

export const WeCoin = styled.p`
    margin: 0;
    text-align: center;
    font-family: ${fonts.montserrat};
    font-weight: 600;
    font-size: 1.7rem;
`;

export const ImageContainer = styled.div`
    margin: 0 10px;
`;

export const Image = styled.img`
    width: 4.5vh;
    margin: 0;
`;

