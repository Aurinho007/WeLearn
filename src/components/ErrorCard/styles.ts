import styled from "styled-components";
import Fonts from "../../assets/fonts/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `;

export const ImageContainer = styled.div`

`;

export const Image = styled.img`
  object-fit: cover;
  height: 250px;
  width: 150px;
`;

export const ContentContainer = styled.div`
  width: 300px;
`;
export const Title = styled.p`
  font-size: 2rem;
  font-family: ${Fonts.montserrat};
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  margin-bottom: 20px;
`;