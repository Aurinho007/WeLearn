import { Triangle } from "react-loader-spinner";
import theme from "../../assets/theme";
import LoaderProps from "./interface";
import { Container, LoaderContainer } from "./styles";

const Loader = (props: LoaderProps) => {
  const { size } = props;

  return (
    <Container style={props}>
      <LoaderContainer style={props}>
        <Triangle
          visible={true}
          height={size}
          width={size}
          color={theme.blue}
          ariaLabel="triangle-loading"
        />
      </LoaderContainer>
    </Container>

  );
};

export default Loader;