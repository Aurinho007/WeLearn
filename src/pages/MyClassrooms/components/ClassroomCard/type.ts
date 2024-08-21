export type ClassroomCardProps = {
  id: number,
  name: string,
  teacherName: string,
  elo?: string,
  conclusionPercent?: number,
  onClick: () => void
}