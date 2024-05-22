export interface IUser {
  name: string;
  email: string;
  weCoin: string;
  xp: number;
  ranking: string;
  perfil: 'Aluno' | 'Professor' | '',
  token: string
};

export interface IUserContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLoged: () => boolean;
  isTeacher: () => boolean;
  isStudent: () => boolean;
};
