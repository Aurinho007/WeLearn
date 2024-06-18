import { Container, Desc, Img, Name, Link, CardFront, CardBack } from "./styles";

interface DevCardProps {
  picture: string;
  name: string;
  description: string;
  link1: string;
  link2: string;
}

const DevCard = (props: DevCardProps) => {
  const { picture, name, description, link1, link2 } = props;
  return (
    <Container>
      <CardFront>
        <Img src={picture} />
        <Name>{name}</Name>
        <Desc>{description}</Desc>
      </CardFront>
      <CardBack>
        <Name>
          Redes Sociais
        </Name>
        <Link href={link1} target="_blank" rel="noopener noreferrer">
          Linked In
        </Link>
        <Link href={link2} target="_blank" rel="noopener noreferrer">
          Instagram
        </Link>
      </CardBack>
    </Container>
  );
};

export default DevCard;
