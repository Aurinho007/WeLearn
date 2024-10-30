export interface IUser {
  nome: string;
  email: string;
  weCoin: number;
  xp: number;
  perfil: string
  token: string
}
export interface IUserLoginData {
  email: string;
  password: string;
}
export interface IUserContextType {
  user: IUser;
  isMobile: boolean,
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLogged: () => boolean;
  isTeacher: () => boolean;
  isStudent: () => boolean;
  logout: () => void;
  expendWeCoins: (price: number) => boolean
}
