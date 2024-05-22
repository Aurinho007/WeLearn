import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../assets/fonts/fonts';
import theme from '../../assets/theme';

export const Container = styled.div`
    border-bottom: ${theme.blue} 5px solid; 
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
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