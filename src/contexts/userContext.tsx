import React, { createContext, useState, useContext, ReactNode, FC } from 'react';
import { IUser, IUserContextType } from '../interfaces/User';

const initialUserState: IUser = {
  name: '',
  email: '',
  wecoins: '',
  xp: 0,
  ranking: '',
  perfil: '',
  token: '',
};

const UserContext = createContext<IUserContextType>({
  user: initialUserState,
  setUser: () => null,
  isLoged: () => false,
  isTeacher: () => false,
  isStudent: () => false
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser>(initialUserState);

  const isLoged = (): boolean => {
    return !!user.token;
  };

  const isTeacher = (): boolean => {
    return user.perfil === "Professor";
  };

  const isStudent = (): boolean => {
    return user.perfil === "Aluno";
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLoged, isTeacher, isStudent }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IUserContextType => useContext(UserContext);
