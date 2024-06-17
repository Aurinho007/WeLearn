import PageHeader from "../../components/PageHeader";
import DevCard from "./components/DevCard";
import { CardsContainer, Container, Line, Text, TextContainer } from "./styles";
import anaPic from '../../assets/images/devs/ana 1.svg'
import aureoPic from '../../assets/images/devs/image 9.svg'
import cavasPic from '../../assets/images/devs/cavas 1.svg'
import rabelloPic from '../../assets/images/devs/rabello 1.svg'


const About = () => {
  return (
    <>
      <PageHeader title="Quem somos?" />
      <Container>
        <TextContainer>
          <Text>
            Uma plataforma colaborativa e
            gamificada de aprendizado desenvolvida por
            alunos do Centro Universitário de Brasília
          </Text>
          <Text>
            O WeLearn tem como objetivo  revolucionar a
            experiência de aprendizado, combinando gamificação,
            análise de dados e motivação
          </Text>
        </TextContainer>
        <PageHeader title="Nosso Time" />
        <CardsContainer>
          <DevCard
            name="Ana Luiza"
            description="Scrum Master"
            picture={anaPic}
          />
          <DevCard
            name="Áureo"
            description="Developer"
            picture={aureoPic}
          />
          <DevCard
            name="Cavalcante"
            description="Developer"
            picture={cavasPic}
          />
          <DevCard
            name="Vitor"
            description="Developer"
            picture={rabelloPic}
          />
        </CardsContainer>
      </Container>
    </>
  );
};

export default About;