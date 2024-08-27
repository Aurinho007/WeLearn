import { styled } from "styled-components";

export const Container = styled.div<{size: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.size}px;
`;

export const Elo = styled.img<{size: number}>`
  height: ${props => props.size}px;
  object-fit: contain;
`;