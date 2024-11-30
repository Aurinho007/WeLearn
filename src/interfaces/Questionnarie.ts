export interface IQuestionnarie {
  id: number
  nome: string
  isDone?: boolean
  liberado: boolean
}

export interface IAnswerQuestionnarie {
  nota: number
  weCoin: number
  xp: number
}

export default IQuestionnarie;