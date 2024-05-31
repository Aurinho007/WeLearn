import React, { useState, useEffect } from 'react';
import successIcon from '../../assets/images/success.png';
import errorIcon from '../../assets/images/error.png';
import warningIcon from '../../assets/images/warning.png';
import infoIcon from '../../assets/images/info.png';
import { IToast } from "./interface";
import { Container, Card, Icon, Text, Content, Title } from "./styles";

const Toast = (props: IToast): JSX.Element => {
  const { message, type } = props;
  const [animationClass, setAnimationClass] = useState('enter');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('exit');
    }, 3000)
    return () => clearTimeout(timer);
  }, []);


  const getIcon = (): string => {
    switch (type) {
      case 'success':
        return successIcon;
      case 'error':
        return errorIcon;
      case 'warning':
        return warningIcon;
      case 'info':
        return infoIcon;
      default:
        return successIcon;
    }
  }

  const getTitle = (): string => {
    switch (type) {
      case 'success':
        return "Sucesso";
      case 'error':
        return "Erro";
      case 'warning':
        return "Atenção";
      case 'info':
        return "Info";
      default:
        return "Sucesso";
    }
  }

  return (
    <Container>
      <Card className={animationClass} color={type}>
        <Icon src={getIcon()} />
        <Content>
          <Title>{getTitle()}</Title>
          <Text>{message}</Text>
        </Content>
      </Card>
    </Container>
  );
}

export default Toast;
