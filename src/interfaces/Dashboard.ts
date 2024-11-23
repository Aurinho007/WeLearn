export interface IDashboardPercent {
  percents: Percents
}

type Percents = {
  correct: number,
  wrong: number,
  dontKnow: number
}

export interface IPerStudent {
  results: Student[]
}

type Student = {
  nome: string
  questoes: Answer[]
}

type Answer = {
  questao: number
  resultado: string
}

export interface IAverage {
  average: number
}

export interface IQuestionInfo {
  info: Question[]
}

type Question = {
  questao: number,
  taxaAcerto: number,
  totalRespostas: number,
  acertos: number,
  erros: number,
  abstencao: number,
  dificuldadeSelecionada: string,
  dificuldadeCalculada: string
}