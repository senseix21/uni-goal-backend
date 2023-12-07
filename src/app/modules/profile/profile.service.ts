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

export const ProfileService = {
    getSingle
}