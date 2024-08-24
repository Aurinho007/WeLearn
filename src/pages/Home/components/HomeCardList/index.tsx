import HomeCard from "../HomeCard";
import CARD_CONTENT from "./constants";
import { Container } from "./styles";

const HomeCardList = () => {
  return (
    <Container>
      <HomeCard
        icon={CARD_CONTENT.DASHBOARD_CARD.ICON}
        title={CARD_CONTENT.DASHBOARD_CARD.TITLE}
        text={CARD_CONTENT.DASHBOARD_CARD.TEXT}
      />
      <HomeCard
        icon={CARD_CONTENT.MOTIVATION_CARD.ICON}
        title={CARD_CONTENT.MOTIVATION_CARD.TITLE}
        text={CARD_CONTENT.MOTIVATION_CARD.TEXT}
      />
      <HomeCard
        icon={CARD_CONTENT.LIGHT_CARD.ICON}
        title={CARD_CONTENT.LIGHT_CARD.TITLE}
        text={CARD_CONTENT.LIGHT_CARD.TEXT}
      />
    </Container>
  );
};

export default HomeCardList;