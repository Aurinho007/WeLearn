import { Triangle } from "react-loader-spinner";
import theme from "../../assets/theme";
import LoaderProps from "./interface";
import { Container, LoaderContainer } from "./styles";

const Loader = (props: LoaderProps) => {
  const { height, width } = props;

  return (
    <Container>
      <LoaderContainer>
        <Triangle
          visible={true}
          height={height}
          width={width}
          color={theme.blue}
          ariaLabel="triangle-loading"
        />
      </LoaderContainer>
    </Container>

  );
};

export default Loader;