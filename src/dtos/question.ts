export type QuestionDTO = {
  id: number
  idQuestionario: number
  enunciado: string
  dica: string
  dificuldade: string
  alternativaCorreta: string
  alternativaA: string
  alternativaB: string
  alternativaC: string
  alternativaD: string
}

export type GenerateQuestionDTO = {
  subject: string
  difficulty: string
}