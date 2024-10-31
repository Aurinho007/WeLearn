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
  const { title, text, icon } = props;

  return (
    <Container>
      <IconContainer>
        <Icon src={getIcon(icon)} />
      </IconContainer>
      <ContentContainer>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <TextContainer>
          <Text>{text}</Text>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default HomeCard;
