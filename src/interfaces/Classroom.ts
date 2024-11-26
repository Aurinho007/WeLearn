export interface IClassroom {
  id: number,
  nomeSala: string,
  nomeProfessor: string,
  elo?: string
  percentualConcluido?: number
}

export interface IRanking  {
  ranking: IRankingItem[]
}

interface IRankingItem {
  position: number,
  name: string,
  elo: string
}

