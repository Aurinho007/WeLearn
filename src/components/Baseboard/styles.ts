import { styled } from 'styled-components';
import fonts from '../../assets/fonts/fonts';
import theme from '../../assets/theme'

export const Content = styled.div`
    width: 100vw;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.lightBlue};
`;

export const Title = styled.div`
    margin-top: 20px;
`;

export const Description = styled.p`
    font-family: ${fonts.montserrat};
    font-weight: 500;
    font-size: 1rem;
    position: fixed;
    bottom: 10px;
    color: ${theme.black};
`;