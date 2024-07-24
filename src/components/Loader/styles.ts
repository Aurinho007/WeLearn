import { styled } from 'styled-components';
import theme from '../../assets/theme';

export const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${theme.black};
  opacity: .6;
`;

export const LoaderContainer = styled.div`
  margin-bottom: 300px;
`;