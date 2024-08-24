import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Elo = styled.img<{size: number}>`
  height: ${props => props.size}px;
  object-fit: contain;
`;