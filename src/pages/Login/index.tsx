import { useState } from "react";
import CreateAccountCard from "./components/CreateAccountCard";
import LoginCard from "./components/LoginCard";
import Swipeable from "./components/Swipeble";
import { Container, Box } from "./styles";
import { useUser } from "../../contexts/UserContext";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const { isMobile } = useUser();

  return (
    <Container>
      <Box>
        {
          isMobile ?
            <>
              {
                isLogin ?
                  <LoginCard setIsLogin={setIsLogin} isLogin={isLogin} /> :
                  <CreateAccountCard setIsLogin={setIsLogin} isLogin={isLogin} />
              }
            </>
            :
            <>
              <Swipeable isLogin={isLogin} />
              <LoginCard setIsLogin={setIsLogin} isLogin={isLogin} />
              <CreateAccountCard setIsLogin={setIsLogin} isLogin={isLogin} />
            </>
        }
      </Box>
    </Container>
  );
};

export default Login;
