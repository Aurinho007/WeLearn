import {
  ProfileConteiner,
  Image,
  ImageContainer,
  WeCoin,
  WeCoinContainer,
  WeCoinLabel,
} from "./styles.ts";
import { useUser } from "../../../../contexts/UserContext.tsx";
import ROUTES from "../../../../constants/routesConstants.ts";
import defaultProfilePic from "../../../../assets/images/default-profile-pic.svg";

const ProfileCard = () => {
  const { user, isStudent } = useUser();

  return (
    <ProfileConteiner to={ROUTES.PROFILE}>
      {
        isStudent() &&
        <WeCoinContainer>
          <WeCoinLabel>WeCoins</WeCoinLabel>
          <WeCoin>{user.weCoin}</WeCoin>
        </WeCoinContainer>
      }
      <ImageContainer>
        <Image src={defaultProfilePic} />
      </ImageContainer>
    </ProfileConteiner>
  );
};

export default ProfileCard;
