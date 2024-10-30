import { createContext, useState, useContext, useEffect, ReactNode, FC } from "react";
import { IUser, IUserContextType } from "../interfaces/User";
import { getUser, logoutUser, saveUser } from "../controllers/userController";

const initialUserState: IUser = {
  nome: "",
  email: "",
  weCoin: 0,
  xp: 0,
  perfil: "",
  token: "",
};

const UserContext = createContext<IUserContextType>({
  user: initialUserState,
  isMobile: false,
  setUser: () => null,
  isLogged: () => false,
  isTeacher: () => false,
  isStudent: () => false,
  logout: () => null,
  expendWeCoins: () => false,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser>(() => {
    const localUser = getUser();
    return localUser ?? initialUserState;
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    saveUser(user);
  }, [user]);

  const isLogged = (): boolean => !!user.token;

  const isTeacher = (): boolean => user.perfil.toLowerCase() === "professor";

  const isStudent = (): boolean => user.perfil.toLowerCase() === "aluno";

  const logout = (): void => {
    logoutUser();
    setUser(initialUserState);
  };

  const expendWeCoins = (price: number): boolean => {
    if (user.weCoin < price) {
      return false;
    }

    user.weCoin -= price;
    return true;
  };

  return (
    <UserContext.Provider value={{ user, isMobile, setUser, isLogged, isTeacher, isStudent, logout, expendWeCoins }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IUserContextType => useContext(UserContext);
