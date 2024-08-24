import { useUser } from "../../../../contexts/UserContext.tsx";
import {
  ProfileConteiner,
  Image,
  ImageContainer,
  WeCoin,
  WeCoinContainer,
  WeCoinLabel,
} from "./styles.ts";
import defaultProfilePic from "../../../../assets/images/default-profile-pic.svg";

const ProfileCard = () => {
  const { user } = useUser();
  return (
    <ProfileConteiner to="/meu-perfil">
      <WeCoinContainer>
        <WeCoinLabel>WeCoins</WeCoinLabel>
        <WeCoin>{user.weCoin}</WeCoin>
      </WeCoinContainer>
      <ImageContainer>
        <Image src={defaultProfilePic} />
      </ImageContainer>
    </ProfileConteiner>
  );
};

export default ProfileCard;
