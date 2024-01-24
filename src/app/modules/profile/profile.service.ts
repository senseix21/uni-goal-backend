import { User } from "@prisma/client";
import { prisma } from "../../../shared/prisma";


const getSingle = async (userId: string): Promise<User | null> => {
    const result = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            ProfileInformation: true,
            Counselor: true,
            LanguageAndOtherQualifications: true,
            EducationHistory: true,
            WorkHistory: true,
            ExtraCurricularActivity: true,
            Skills: true,
            StudentStatus: true,
        },
    });

    return result;
};


const getAllCounselor = async (): Promise<User[] | null> => {
    const result = await prisma.user.findMany({
        where: {
            role: 'counselor'
        },

        include: {
            ProfileInformation: true,
            Counselor: true,
        },
    });

    return result;
};

const getAll = async (): Promise<User[] | null> => {
    const result = await prisma.user.findMany({
        where: {
            role: 'student'
        },
        include: {
            ProfileInformation: true,
            Counselor: true,
            LanguageAndOtherQualifications: true,
            EducationHistory: true,
            WorkHistory: true,
            ExtraCurricularActivity: true,
            Skills: true,
            StudentStatus: true,
        },
    });

    return result;
};

export const ProfileService = {
    getSingle,
    getAll,
    getAllCounselor
}