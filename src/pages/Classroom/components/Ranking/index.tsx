import { useEffect, useState } from "react";
import RankingIcon from "../../../../components/RankingIcon";
import { IRanking } from "../../../../interfaces/Classroom";
import { Container, Header, HeaderItem, Item, Line, Separator, IconWrapper } from "./styles";
import { getRanking } from "../../../../service/classroom";
import Loader from "../../../../components/Loader";

const Ranking = ({ id }: { id: number }) => {

  const [ranking, setRanking] = useState<IRanking>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {

    async function init() {
      getRanking(id, sucessCallback, errorCallback);
    }

    init();
  }, []);

  const sucessCallback = (response: IRanking) => {
    setRanking(response);
    setError("");
    setLoading(false);
  };

  const errorCallback = (error: string) => {
    setError(error);
    setLoading(false);
  };

  const getShortName = (fullName: string): string => {
    const nameParts = fullName.trim().split(" ");
    if(nameParts.length === 1){
      return nameParts[0];
    }
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];

    return `${firstName} ${lastName}`;

  };

  const renderRanking = () => {
    if (loading) return <Loader size={100} />;

    if (error) return <p>Algo deu errado no carregamento do ranking</p>;
    if (!ranking) return;

    return (
      ranking.ranking.length > 0 ?

        ranking.ranking.slice(0, 5).map((item, index) => {
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
        :
        <Item>Sem alunos na sala</Item>
    );
  };


  return (
    <Container>
      <Header>
        <HeaderItem>Posição</HeaderItem>
        <HeaderItem>Nome</HeaderItem>
        <HeaderItem>Elo</HeaderItem>
      </Header>

      <Separator />

      {renderRanking()}
    </Container>
  );
};

export default Ranking;
