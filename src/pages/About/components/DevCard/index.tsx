import { Desc, Img, Name, CardFront } from "./styles";

interface DevCardProps {
  picture: string;
  name: string;
  description: string;
}

const DevCard = (props: DevCardProps) => {
  const { picture, name, description } = props;
  return (
    <CardFront>
      <Img src={picture} />
      <Name>{name}</Name>
      <Desc>{description}</Desc>
    </CardFront>
  );
};

export default DevCard;
