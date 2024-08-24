import EmptyClassroomsProps from "./interface";
import image from "../../../../assets/images/empty-search.svg";
import { Container, ContentContainer, Image, ImageContainer, Title, Text } from "./styles";

const EmptyClassrooms = (props: EmptyClassroomsProps): JSX.Element => {
  const { text, button } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <ContentContainer>
        <Title>Ops...</Title>
        <Text>{text}</Text>
        {button}
      </ContentContainer>
    </Container>
  );
};

export default EmptyClassrooms;