import * as themes from "../../assets/theme.ts";
import {  Content, Description, Title } from "./styles.ts";

const Baseboard = () => {
  return (
    //O footer não é afetado de acordo com o tema
      <Content theme={themes.lightTheme}>
        <Title theme={themes.lightTheme}>
          WeLearn
        </Title>
        <Description>
          Copyright © 2023 | Todos os direitos reservados
        </Description>
      </Content>
  );
};

export default Baseboard;
