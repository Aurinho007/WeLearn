import * as profileConstants from '../constants/userProfileConstants';

export type User = {
    name: string,
    email: string,
    profileType: 
        typeof profileConstants.STUDENT_PROFILE |
        typeof profileConstants.TEACHER_PROFILE,
    rank: 
        typeof profileConstants.BRONZE|
        typeof profileConstants.SILVER |
        typeof profileConstants.GOLD |
        typeof profileConstants.DIAMOUND;
    xp: number;
    weCoins: number;
}