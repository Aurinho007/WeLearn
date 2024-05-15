export interface IUser {
  name?: string;
  email?: string;
  wecoins?: string;
  xp?: number;
  ranking?: string;
  token: string
  isLogged?: boolean;
  isProfessor?: boolean;
};

export interface IUserContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
};
