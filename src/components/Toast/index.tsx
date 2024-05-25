import { Container, Card, Icon, Text, Content, Title } from "./styles";
import sucessIcon from '../../assets/images/sucess.png';
import errorIcon from '../../assets/images/error.png';
import warningIcon from '../../assets/images/warning.png';
import infoIcon from '../../assets/images/info.png';
import { IToast } from "./interface";

const Toast = (props: IToast): JSX.Element => {
  const { message, type } = props
 
  const getIcon = (): string => {
    if (type === 'sucess')
      return sucessIcon;

    if (type === 'error')
      return errorIcon;

    if (type === 'warning')
      return warningIcon;

    if (type === 'info')
      return infoIcon;

    return sucessIcon;
  }

  const getTitle = (): string => {
    if (type === 'sucess')
      return "Sucesso";

    if (type === 'error')
      return "Erro";

    if (type === 'warning')
      return "Atenção";

    if (type === 'info')
      return "Info";

    return sucessIcon;
  }

  return (
    <Container>
      <Card color={type}>
        <Icon src={getIcon()} />
        <Content>
        <Title>{getTitle()}</Title>
        <Text>{message}</Text>
        </Content>
      </Card>
    </Container>
  )
}

export default Toast;