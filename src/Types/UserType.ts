import { BRONZE, DIAMOUND, GOLD, SILVER, STUDENT_PROFILE, TEACHER_PROFILE } from './../constants/userProfileConstants';

export type UserType = {
    userName: string,
    userEmail: string,
    userProfile: typeof STUDENT_PROFILE | typeof TEACHER_PROFILE,
    userRank: typeof BRONZE| typeof SILVER | typeof GOLD | typeof DIAMOUND;
    userXP: number;
    userWC: number;
}