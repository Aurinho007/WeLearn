import { Triangle } from 'react-loader-spinner'
import theme from '../../assets/theme';
import LoaderProps from './interface';
import { Container } from './styles';

const Loader = (props: LoaderProps) => {
  const { height, width } = props

  return (
    <Container>
      <Triangle
        visible={true}
        height={height}
        width={width}
        color={theme.blue}
        ariaLabel="triangle-loading"
      />
    </Container>

  )
}

export default Loader;