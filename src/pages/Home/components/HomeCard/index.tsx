import IHomeCard from "./interface";
import {
  Container,
  IconContainer,
  ContentContainer,
  TitleContainer,
  TextContainer,
  Title,
  Text,
  Icon,
} from "./styles";
import getIcon from "./utils";

const HomeCard = (props: IHomeCard) => {
  return (
    <Container>
      <ContentContainer>
        <TitleContainer>
          <Title>{props.title}</Title>
        </TitleContainer>
        <TextContainer>
          <Text>{props.text}</Text>
        </TextContainer>
      </ContentContainer>
      <IconContainer>
        <Icon src={getIcon(props.icon)} />
      </IconContainer>
    </Container>
  );
};

export default HomeCard;
