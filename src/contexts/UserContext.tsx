import React, { createContext, useState, useContext, useEffect, ReactNode, FC } from 'react';
import { IUser, IUserContextType } from '../interfaces/User';
import { getUser, saveUser, logoutUser } from '../controllers/userController';

const initialUserState: IUser = {
  name: '',
  email: '',
  weCoin: 0,
  xp: 0,
  ranking: '',
  perfil: '',
  token: '',
};

const UserContext = createContext<IUserContextType>({
  user: initialUserState,
  setUser: () => null,
  isLogged: () => false,
  isTeacher: () => false,
  isStudent: () => false
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

  const isTeacher = (): boolean => user.perfil === "Professor";

  const isStudent = (): boolean => user.perfil === "Aluno";

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, isTeacher, isStudent }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IUserContextType => useContext(UserContext);
