import { createAccount } from "../../../../api"
import CreateAccountDto from "../../../../dtos/createAccount";

export const callCreateAccount = async (
  name: string,
  email: string,
  profileType: 'Aluno' | 'Professor',
  password: string
): Promise<void> => {
  const createUser: CreateAccountDto = {
    nome: name,
    email,
    perfil: profileType,
    senha: password
  }

  await createAccount(createUser);

}