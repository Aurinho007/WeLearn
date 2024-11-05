import PageHeader from "../../components/PageHeader";
import DevCard from "./components/DevCard";
import { CardsContainer, Container, ContentContainer, Image, Text, TextContainer } from "./styles";
import anaPic from "../../assets/images/devs/ana 1.svg";
import aureoPic from "../../assets/images/devs/image 9.svg";
import cavasPic from "../../assets/images/devs/cavas 1.svg";
import rabelloPic from "../../assets/images/devs/rabello 1.svg";
import img from "../../assets/images/online-test.svg";
import { useUser } from "../../contexts/UserContext";

const About = () => {
  const { user } = useUser();
  const vitorOccupation = user.nome.toLowerCase().includes("rabello") ? "Vagabundo" : "Dev";

  return (
    <>
      <PageHeader title="Quem somos?" />
      <Container>
        <ContentContainer>
          <Image src={img} />
          <TextContainer>
            <Text>
              Uma plataforma colaborativa e gamificada de aprendizado desenvolvida por quatro
              alunos do Centro Universitário de Brasília
            </Text>
            <Text>
              O <i><b>WeLearn</b></i> tem como objetivo revolucionar a experiência de aprendizado,
              combinando gamificação, análise de dados e motivação
            </Text>
          </TextContainer>
        </ContentContainer>
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
            name="Áureo Rodrigues"
            description="Dev & PO"
            picture={aureoPic}
            link1="https://www.linkedin.com/in/%C3%A1ureo-rodrigues-916249206/"
            link2="https://www.instagram.com/aureo.rdg/"
          />
          <DevCard
            name="Felipe Cavalcante"
            description="Dev"
            picture={cavasPic}
            link1="https://www.linkedin.com/in/felipe-cavalcante-mc/"
            link2="https://www.instagram.com/fe.cavalcanteee/"
          />
          <DevCard
            name="Vitor Rabello"
            description={vitorOccupation}
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