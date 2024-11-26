import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import IClassroom from "../../interfaces/Classroom";
import IQuestionnarie from "../../interfaces/Questionnarie";
import { DashContainer, Container, DashboardGroup, Dash, DashTitle } from "./styles";
import Percent from "./components/Percent";
import Average from "./components/Average";
import PerStudent from "./components/PerStudent";
import ROUTES from "../../constants/routesConstants";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { room, questionnaire }: { room: IClassroom; questionnaire: IQuestionnarie } = location.state || {};

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
          <PerStudent id={questionnaire.id} />
        </DashboardGroup>
      </Container>
    </>
  );
};

export default Dashboard;
