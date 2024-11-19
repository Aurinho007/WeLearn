import ROUTES from "../../constants/routesConstants";
import logo from "../../assets/images/Logo.png";
import { Image } from "./styles";
import { useNavigate } from "react-router-dom";

const Logo = () => {

  const navigate = useNavigate();

  return <Image src={logo} onClick={() => navigate(ROUTES.HOME)}/>;
};

export default Logo;
