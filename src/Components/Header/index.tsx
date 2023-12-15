import { Container, NavConteiner, NavItem, NavSeparator, ProfileConteiner, Image, ImageContainer, WeCoin, WeCoinContainer, WeCoinLabel, Title } from './styles.ts';
import defaultProfilePic from '../../assets/images/default-profile-pic.svg';
const Header = () => {


  return (
    <Container >
      <Title>
        WeLearn 
      </Title>

      <NavConteiner>
        <NavItem> Home </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem> Salas </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem> Sobre </NavItem>
      </NavConteiner>

      <ProfileConteiner>
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
