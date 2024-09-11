import { BackButton, Container, Title, TitleContainer, SubTitle } from "./styles";
import PageHeaderProps from "./types";
import arrowBack from "../../assets/images/arrowBack.svg";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routesConstants";

const PageHeader = ({ title, subTitle, hasBackButton }: PageHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      {
        hasBackButton &&
        <BackButton src={arrowBack} onClick={() => navigate(ROUTES.GO_BACK)} />
      }
      <TitleContainer>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </TitleContainer>
    </Container>
  );
};

export default PageHeader;