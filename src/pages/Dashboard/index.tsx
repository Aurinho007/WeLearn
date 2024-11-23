import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import IClassroom from "../../interfaces/Classroom";
import IQuestionnarie from "../../interfaces/Questionnarie";
import { AverageContainer, Container, DashboardGroup, PercentContainer, } from "./styles";
import Percent from "./components/Percent";
import Average from "./components/Average";
import PerStudent from "./components/PerStudent";

const Dashboard = () => {
  const location = useLocation();

  const { room, questionnaire }: { room: IClassroom, questionnaire: IQuestionnarie } = location.state || {};

  return (
    <>
      <PageHeader
        title={room.nomeSala}
        subTitle={`Dashboard - ${questionnaire.nome}`}
        hasBackButton
      />

      <Container>
        <DashboardGroup>
          <AverageContainer>
            <Average id={questionnaire.id}/>
          </AverageContainer>
          <PercentContainer>
            <Percent id={questionnaire.id} />
          </PercentContainer>
        </DashboardGroup>
        <DashboardGroup>
          <PerStudent id={questionnaire.id}/>
        </DashboardGroup>
      </Container>

    </>
  );
};

export default Dashboard;