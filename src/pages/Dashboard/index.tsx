import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { IClassroom } from "../../interfaces/Classroom";
import IQuestionnarie from "../../interfaces/Questionnarie";
import { DashContainer, Container, DashboardGroup, Dash, DashTitle, Sub } from "./styles";
import Percent from "./components/Percent";
import Average from "./components/Average";
import Report from "./components/Report";
import ROUTES from "../../constants/routesConstants";
import PerQuestion from "./components/PerQuestion";
import IQuestion from "../../interfaces/Question";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { room, questionnaire, questions }: { room: IClassroom; questionnaire: IQuestionnarie, questions: IQuestion[] } = location.state || {};

  useEffect(() => {
    if (!room || !questionnaire) {
      navigate(ROUTES.HOME);
    }
  }, [room, questionnaire, navigate]);

  if (!room || !questionnaire) {
    return null;
  }

  return (
    <>
      <PageHeader
        title={room.nomeSala}
        subTitle={`Dashboard - ${questionnaire.nome}`}
        hasBackButton
      />

      <Container>
        <DashboardGroup>
          <DashContainer>
            <DashTitle>Nota média</DashTitle>
            <Dash>
              <Average id={questionnaire.id} />
            </Dash>
          </DashContainer>
          <DashContainer>
            <DashTitle>Acertos, erros e abstenções</DashTitle>
            <Dash>
              <Percent id={questionnaire.id} />
            </Dash>
          </DashContainer>
        </DashboardGroup>
        <DashboardGroup>
          <PerQuestion id={questionnaire.id} questions={questions}/>
        </DashboardGroup>
        <DashboardGroup>
          <DashContainer>
            <DashTitle>WeBright - <Sub>IA do WeLearn</Sub> </DashTitle>
            <Dash>
              <Report id={questionnaire.id} />
            </Dash>
          </DashContainer>
        </DashboardGroup>
      </Container>
    </>
  );
};

export default Dashboard;
