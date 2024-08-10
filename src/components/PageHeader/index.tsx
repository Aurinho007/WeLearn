import { BackButton, Container, Title } from "./styles";
import PageHeaderProps from "./types";
import arrowBack from '../../assets/images/arrowBack.svg'
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, hasBackButton }: PageHeaderProps) => {
  const navigation = useNavigate();

  return (
    <Container>
      {
        hasBackButton &&
        <BackButton src={arrowBack} onClick={() => navigation(-1)}/>
      }
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default PageHeader;