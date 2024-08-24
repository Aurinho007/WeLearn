import { Container, NotFoundImg } from "./styles";
import notFoundImg from "../../assets/images/not-found-light.svg";

const NotFound = () => {
  return (
    <Container>
      <NotFoundImg src={notFoundImg}/>
    </Container>
  );
};

export default NotFound;