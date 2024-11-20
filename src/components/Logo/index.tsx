import ROUTES from "../../constants/routesConstants";
import { BT, Container, T, DT } from "./styles";
import { useNavigate } from "react-router-dom";

const Logo = () => {

  const navigate = useNavigate();

  return (

    <Container onClick={() => navigate(ROUTES.HOME)}>
      <T>W</T>
      <BT>e</BT>
      <T>L</T>
      <DT>earn</DT>
    </Container>);
};

export default Logo;
