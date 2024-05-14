import { createAccount } from "../../../../api"

export const callCreateAccount = async (
  nome: string,
  email: string,
  perfil: 'Aluno' | 'Professor',
  senha: string
): Promise<any> => {
  const createUser = {
    nome,
    email,
    perfil,
    senha
  }

  const response = await createAccount(createUser);

  return response;

}