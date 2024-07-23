import styled from "styled-components";
import Fonts from "../../../../assets/fonts/fonts";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

export const ImageContainer = styled.div`
  margin-right: -40px;
`;

export const Image = styled.img`
  height: 250px;
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