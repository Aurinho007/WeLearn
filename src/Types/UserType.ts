import * as profileConstants from '../Constants/userProfileConstants';

export type UserType = {
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