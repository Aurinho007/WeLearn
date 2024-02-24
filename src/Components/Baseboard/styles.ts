import { styled } from 'styled-components';
import fonts from '../../assets/fonts/fonts';
import theme from '../../assets/theme'

export const Content = styled.div`
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    background-color: ${theme.accentColorFooter};
`;

export const Title = styled.p`
    font-family: ${fonts.roboto};
    font-style: italic;
    font-weight: 800;
    font-size: 2.5rem;
    margin: 15px 0;
    color: ${theme.primaryText}
`;

export const Description = styled.p`
    font-family: ${fonts.montserrat};
    font-weight: 500;
    font-size: 1rem;
    position: fixed;
    bottom: 0;
    margin-bottom: 10px;
    color: ${theme.primaryText};
`;