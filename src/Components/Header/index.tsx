import { Container, NavConteiner, NavItem, NavSeparator, ProfileConteiner, Image, ImageContainer, WeCoin, WeCoinContainer, WeCoinLabel, Title } from './styles.ts';
import defaultProfilePic from '../../assets/images/default-profile-pic.svg';

const Header = () => {


  return (
    <Container >
      <Title to="/">
        WeLearn 
      </Title>

      <NavConteiner>
        <NavItem to="/"> Home </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem to="/salas"> Salas </NavItem>
        <NavSeparator> • </NavSeparator>
        <NavItem to="/sobre"> Sobre </NavItem>
      </NavConteiner>

      <ProfileConteiner to="/meu-perfil">
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
