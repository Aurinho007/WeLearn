import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import fonts from '../../assets/fonts/fonts';
import theme from '../../assets/theme';

export const Title = styled(Link)`
    text-decoration: none;
    font-family: ${fonts.roboto};
    font-style: italic;
    font-weight: 800;
    font-size: 2.5rem;
    margin: 0;
    color: ${theme.black};
`;