import React, { createContext, useState, useContext, ReactNode, FC } from 'react';
import { IUser, IUserContextType } from '../interfaces/User';

const initialUserState: IUser = {
  name: '',
  email: '',
  wecoins: '',
  xp: 0,
  ranking: '',
  isLogged: false,
  isProfessor: false,
  token: ''
};

const UserContext = createContext<IUserContextType>({
  user: initialUserState,
  setUser: () => null,
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser>(initialUserState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): IUserContextType => useContext(UserContext);
