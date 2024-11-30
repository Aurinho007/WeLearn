import { styled } from "styled-components";
import theme from "../../assets/theme";
import LoaderProps from "./interface";

export const Container = styled.div<{style: LoaderProps}>`
  display: flex;
  position: ${props => props.style.fullScreen ? "absolute" : ""};
  z-index: 9999999;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  height: ${props => props.style.fullScreen ? "100%" : props.style.size};
  width: 100%;
  background-color: ${props => props.style.fullScreen ? theme.black : "none"};
  opacity: .6;
  padding: ${props => props.style.fullScreen ? "0" : "10px 0"};;
`;

export const LoaderContainer = styled.div<{style: LoaderProps}>`
  margin-bottom: ${props => props.style.fullScreen ? "300px" : 0};
`;