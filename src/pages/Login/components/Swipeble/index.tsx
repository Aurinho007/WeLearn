import {
  Container,
  Logo,
  PhraseContainer,
  Text,
  BoldedText,
  ImageContainer,
  Image,
  Content,
  LogoContainer,
} from "./styles";
import readingBoy from "../../../../assets/images/reading-boy.svg";

type SwipeableProps = {
  isLogin: boolean
}

const Swipeable = (props: SwipeableProps) => {
  const { isLogin } = props; 

  return (
    <Container isLogin={isLogin}>
      <Content>
        <LogoContainer>
          <Logo>WeLearn</Logo>
        </LogoContainer>

        <PhraseContainer>
          <Text>Estude como</Text>
          <BoldedText>Sempre,</BoldedText>
          <Text>Aprenda como</Text>
          <BoldedText>Nunca!</BoldedText>

          <ImageContainer>
            <Image src={readingBoy} />
          </ImageContainer>
        </PhraseContainer>
      </Content>
    </Container>
  );
};

export default Swipeable;
