export type LoginDto = {
  email: string,
  senha: string,
}

export type CreateAccountDto = {
  nome: string,
  email: string,
  perfil: "Professor" | "Aluno" | undefined,
  senha: string,
}
