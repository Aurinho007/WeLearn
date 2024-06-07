import EmptyClassroomsProps from "./interface"
import image from '../../../../assets/images/empty-search.svg';
import { Container, ContentContainer, Image, ImageContainer, Text } from "./styles";

const EmptyClassrooms = (props: EmptyClassroomsProps): JSX.Element => {
  const { text, button } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <ContentContainer>
        <Text>Ops... {text}</Text>
        {button}
      </ContentContainer>
    </Container>
  )
}

export default EmptyClassrooms;