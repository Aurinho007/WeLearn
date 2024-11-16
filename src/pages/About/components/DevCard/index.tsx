import { Container, Desc, Img, Name, CardFront } from "./styles";

interface DevCardProps {
  picture: string;
  name: string;
  description: string;
}

const DevCard = (props: DevCardProps) => {
  const { picture, name, description } = props;
  return (
    <Container>
      <CardFront>
        <Img src={picture} />
        <Name>{name}</Name>
        <Desc>{description}</Desc>
      </CardFront>
    </Container>
  );
};

export default DevCard;
