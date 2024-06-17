import { Container, Desc, Img, Name } from "./styles";

interface DevCardProps {
  picture: string;
  name: string;
  description: string
}

const DevCard = (props: DevCardProps) => {
  const { picture, name, description } = props
  return (
    <Container>
      <Img src={picture} />
      <Name>
        {name}
      </Name>
      <Desc>
        {description}
      </Desc>
    </Container>
  )
}

export default DevCard;