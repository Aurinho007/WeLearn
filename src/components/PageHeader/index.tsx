import { Container, Title } from "./styles";
import PageHeaderProps from "./types";

const PageHeader = ({ title }: PageHeaderProps ) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default PageHeader;