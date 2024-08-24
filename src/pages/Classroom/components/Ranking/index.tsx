import RankingIcon from "../../../../components/RankingIcon";
import { Container, Header, HeaderItem, Item, Line, Separator, IconWrapper } from "./styles";

const Ranking = () => {

  const mockLines = [
    {
      position: 1,
      name: "Áureo Rodrigues de Farias",
      elo: "diamante"
    },
    {
      position: 2,
      name: "João Silva Costa",
      elo: "diamante"
    },
    {
      position: 3,
      name: "Maria Oliveira",
      elo: "ouro"
    },
    {
      position: 4,
      name: "Carlos Pereira silva",
      elo: "prata"
    },
    {
      position: 5,
      name: "Eduardo santos",
      elo: "prata"
    },
  ];


  const getShortName = (fullName: string): string => {
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];

    return `${firstName} ${lastName}`;

  };

  return (
    <Container>
      <Header>
        <HeaderItem>Posição</HeaderItem>
        <HeaderItem>Nome</HeaderItem>
        <HeaderItem>Elo</HeaderItem>
      </Header>

      <Separator />

      {
        mockLines.map((item, index) => {
          return (
            <Line key={index}>
              <Item>
                {item.position}º
              </Item>
              <Item>
                {getShortName(item.name)}
              </Item>
              <IconWrapper>
                <RankingIcon elo={item.elo} size={35} />
              </IconWrapper>
            </Line>

          );
        })
      }
    </Container>
  );
};

export default Ranking;
