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
            link1="https://www.linkedin.com/in/ana-luiza-de-oliveira-carvalho-174049258/"
            link2="https://www.instagram.com/analu.oliiver/"
          />
          <DevCard
            name="Áureo"
            description="Developer"
            picture={aureoPic}
            link1="https://www.linkedin.com/in/%C3%A1ureo-rodrigues-916249206/"
            link2="https://www.instagram.com/aureo.rdg/"
          />
          <DevCard
            name="Cavalcante"
            description="Developer"
            picture={cavasPic}
            link1="https://www.linkedin.com/in/felipe-cavalcante-mc/"
            link2="https://www.instagram.com/fe.cavalcanteee/"
          />
          <DevCard
            name="Vitor"
            description="Developer"
            picture={rabelloPic}
            link1="https://www.linkedin.com/in/vitor-mendes-9b732a222/"
            link2="https://www.instagram.com/vitor.rabello/"
          />
        </CardsContainer>
      </Container>
    </>
  );
};

export default About;