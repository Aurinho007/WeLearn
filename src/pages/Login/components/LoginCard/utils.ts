import { login } from "../../../../api"
import loginDto from "../../../../dtos/login";
import { IUser } from "../../../../interfaces/User";

export const callLogin = async (email: string, password: string): Promise<IUser> => {
  const user: loginDto = {
    email,
    senha: password
  }
  const response = await login(user)

  return response;

}
