import { login } from "../../../../api"

export const callLogin = async (email: string, password: string): Promise<any> => {
  const user = {
    email,
    senha: password
  }

  const response = await login(user)

  return response;

}