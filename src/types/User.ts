import * as profileConstants from '../constants/userProfileConstants';

export type User = {
    userName: string,
    userEmail: string,
    userProfileType: 
        typeof profileConstants.STUDENT_PROFILE |
        typeof profileConstants.TEACHER_PROFILE,
    userRank: 
        typeof profileConstants.BRONZE|
        typeof profileConstants.SILVER |
        typeof profileConstants.GOLD |
        typeof profileConstants.DIAMOUND;
    userXP: number;
    userWC: number;
}