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

export interface IQuestionInfoResponse {
  info: IQuestionInfo[]
}

export type IQuestionInfo = {
  abstencao: number,
  acertos: number,
  dificuldadeCalculada: string
  dificuldadeSelecionada: string,
  erros: number,
  maisErrada: string,
  questao: number,
  taxaAcerto: number,
  totalRespostas: number,
}

export interface IReport {
  report: string
}