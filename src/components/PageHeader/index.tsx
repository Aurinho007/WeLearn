import { Container, Title } from "./styles";
import PageHeaderProps from "./types";

const PaageHeader = ({ title }: PageHeaderProps ) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default PaageHeader;