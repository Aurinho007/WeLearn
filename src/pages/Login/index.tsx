import { useState } from "react";
import CreateAccountCard from "./components/CreateAccountCard";
import LoginCard from "./components/LoginCard";
import Swipeable from "./components/Swipeble";
import { Container, Box } from "./styles";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <Container>
      <Box>
        <Swipeable isLogin={isLogin} />
        <LoginCard setIsLogin={setIsLogin} />
        <CreateAccountCard setIsLogin={setIsLogin}/>
      </Box>
    </Container>
  );
};

export default Login;
