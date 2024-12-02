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
          />
          <DevCard
            name="Áureo Rodrigues"
            description="Dev & PO"
            picture={aureoPic}
            
          />
          <DevCard
            name="Felipe Cavalcante"
            description="Dev"
            picture={cavasPic}
            
          />
          <DevCard
            name="Vitor Rabello"
            description={vitorOccupation}
            picture={rabelloPic}
          />
        </CardsContainer> 
      </Container>
    </>
  );
};

export default About;