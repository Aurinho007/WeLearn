import ErrorCardTyoe from "./interface";
import { Container, ImageContainer, ContentContainer, Title, Image, Text } from "./styles";
import image from "../../assets/images/empty-search.svg";
import SecondaryButton from "../Buttons/SecondaryButton";
import { EXPIRED_TOKEN_ERROR } from "../../service/api";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routesConstants";

const ErrorCard = (props: ErrorCardTyoe): JSX.Element => {
  const { text } = props;
  let { buttonText, onClick } = props;

  const { logout } = useUser();
  const navigate = useNavigate();
  
  if(text == EXPIRED_TOKEN_ERROR){
    buttonText = "Logar novamente";
    onClick = () => {
      logout();
      navigate(ROUTES.LOGIN);
    };
  }

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