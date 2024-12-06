import { useUser } from "../../../../contexts/UserContext";
import HomeCard from "../HomeCard";
import { Container } from "./styles";

const HomeCardList = () => {

  const teacher_cards = [
    {
      TITLE: "Inovação com IA",
      TEXT: "Um jeito inovador de ensinar usando IA!",
      ICON: "light"
    },
    {
      TITLE: "Dashboard",
      TEXT: "Gráficos para análise do professor!",
      ICON: "graph"
    },
    {
      TITLE: "Motivação",
      TEXT: "Alunos motivados a aprender e estudar!",
      ICON: "hand"
    }
  ];

  const student_cards = [
    {
      TITLE: "Ganhe Xp e WeCoins",
      TEXT: "Responda corretamente as perguntas e ganhe moedas digitais!",
      ICON: "light"
    },
    {
      TITLE: "Aumente seu elo",
      TEXT: "Participe das salas e questionários e suba de elo!",
      ICON: "graph"
    },
    {
      TITLE: "Suba seu Ranking",
      TEXT: "Seja o(a) melhor aluno(a) de uma sala!",
      ICON: "hand"
    }
  ];

  const { isStudent } = useUser();

  const card = isStudent() ? student_cards : teacher_cards;

  return (
    <Container>
      {
        card.map((item, index) => {
          return (
            <HomeCard
              key={index}
              icon={item.ICON}
              title={item.TITLE}
              text={item.TEXT}
            />
          );
        })
      }
    </Container>
  );
};

export default HomeCardList;
