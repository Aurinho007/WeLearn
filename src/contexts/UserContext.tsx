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
  setUser: () => null,
  isLogged: () => false,
  isTeacher: () => false,
  isStudent: () => false,
  logout: () => null
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser>(() => {
    const localUser = getUser();
    return localUser ?? initialUserState;
  });

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

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, isTeacher, isStudent, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IUserContextType => useContext(UserContext);
