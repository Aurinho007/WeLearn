export type User = {
    name: string,
    email: string,
    profileType: 'Professor' | 'Aluno',
    rank: 'Diamante' | 'Ouro' | 'Prata' | 'Bronze', 
    xp: number;
    weCoins: number;
}