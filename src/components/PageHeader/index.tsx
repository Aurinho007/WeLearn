import { BackButton, Container, Title } from "./styles";
import PageHeaderProps from "./types";
import arrowBack from "../../assets/images/arrowBack.svg";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routesConstants";

const PageHeader = ({ title, hasBackButton }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      {
        hasBackButton &&
        <BackButton src={arrowBack} onClick={() => navigate(ROUTES.GO_BACK)}/>
      }
      <Title>
        {title}
      </Title>
    </Container>
  );
};

export default PageHeader;