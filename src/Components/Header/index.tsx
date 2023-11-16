import { useTheme } from "../../Contexts/ThemeContext.tsx";
import * as themes  from "../../assets/theme.ts";
import { Container, NavConteiner, NavItem, NavSeparator, ProfileConteiner, Image, ImageContainer, WeCoin, WeCoinContainer, WeCoinLabel, Title } from "./styles.ts";
import defaultProfilePic from "../../assets/images/default-profile-pic.svg";

const Header = () => {

const { theme } = useTheme();
const currentTheme = theme === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    <Container theme={currentTheme}>
     <Title theme={currentTheme}>
        WeLearn 
      </Title>

      <NavConteiner theme={currentTheme}>
        <NavItem> Home </NavItem>
        <NavSeparator theme={currentTheme}> • </NavSeparator>
        <NavItem> Salas </NavItem>
        <NavSeparator theme={currentTheme}> • </NavSeparator>
        <NavItem> Sobre </NavItem>
      </NavConteiner>

      <ProfileConteiner theme={currentTheme}>
        <WeCoinContainer>
          <WeCoinLabel>
            WeCoins
          </WeCoinLabel>
          <WeCoin>
            525
          </WeCoin>
        </WeCoinContainer>

        <ImageContainer>
          <Image
            src={defaultProfilePic}
          />
        </ImageContainer>

      </ProfileConteiner>
    </Container>
  );
};

export default Header;
