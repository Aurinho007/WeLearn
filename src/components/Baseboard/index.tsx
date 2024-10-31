import { useUser } from "../../contexts/UserContext.tsx";
import Logo from "../Logo/index.tsx";
import {  Content, Description, Title } from "./styles.ts";

const Baseboard = () => {
  const { isMobile } = useUser();

  if (isMobile) return;

  return (
    <Content>
      <Title>
        <Logo />
      </Title>
      <Description>
          Copyright © 2024 | Todos os direitos reservados
      </Description>
    </Content>
  );
};

export default Baseboard;
