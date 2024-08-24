import ErrorCardTyoe from "./interface";
import { Container, ImageContainer, ContentContainer, Title, Image, Text } from "./styles";
import image from "../../assets/images/empty-search.svg";
import SecondaryButton from "../Buttons/SecondaryButton";

const ErrorCard = (props: ErrorCardTyoe): JSX.Element => {
  const { text, buttonText, onClick } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <ContentContainer>
        <Title>Ops...</Title>
        <Text>{text}</Text>
        <SecondaryButton
          Ffamily="montserrat"
          Fsize={1}
          Fweight={500}
          onClick={onClick}
          outside="blue"
          text={buttonText}
        />
      </ContentContainer>
    </Container>
  );
};

export default ErrorCard;