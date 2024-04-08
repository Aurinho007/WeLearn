import {
  ProfileConteiner,
  Image,
  ImageContainer,
  WeCoin,
  WeCoinContainer,
  WeCoinLabel,
} from './styles.ts';
import defaultProfilePic from '../../../../assets/images/default-profile-pic.svg';

const ProfileCard = () => {
  return (
    <ProfileConteiner to="/meu-perfil">
      <WeCoinContainer>
        <WeCoinLabel>WeCoins</WeCoinLabel>
        <WeCoin>525</WeCoin>
      </WeCoinContainer>
      <ImageContainer>
        <Image src={defaultProfilePic} />
      </ImageContainer>
    </ProfileConteiner>
  );
};

export default ProfileCard;
