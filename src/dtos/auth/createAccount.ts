type CreateAccountDto = {
  nome: string,
  email: string,
  perfil: 'Professor' | 'Aluno',
  senha: string,
}

export default CreateAccountDto;