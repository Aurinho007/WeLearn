type CreateAccountDto = {
  name: string,
  email: string,
  profileType: 'Professor' | 'Aluno',
  password: string
}

export default CreateAccountDto;