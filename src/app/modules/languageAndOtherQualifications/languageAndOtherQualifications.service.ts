import { LanguageAndOtherQualifications } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: LanguageAndOtherQualifications, userId: string): Promise<LanguageAndOtherQualifications> => {
    // Check if the user has already added LanguageAndOtherQualifications
    const existingItem = await prisma.languageAndOtherQualifications.findFirst({
        where: {
            userId,
        },
    });

    if (existingItem) {
        throw new Error("Language And Other Qualifications Information already exist for the user");
    }



    // If the LanguageAndOtherQualifications is not already in the user Profile, add it
    const result = await prisma.languageAndOtherQualifications.create({
        data: {
            ...payload,
            userId
        }
    })
    return result;
}

const getSingle = async (userId: string, id: string): Promise<LanguageAndOtherQualifications | null> => {
    const result = await prisma.languageAndOtherQualifications.findFirst({
        where: {
            userId,
            id
        },
        include: {
            user: true
        }
    })

    return result;
}


const updateSingle = async (data: Partial<LanguageAndOtherQualifications>, id: string): Promise<LanguageAndOtherQualifications> => {
    const result = await prisma.languageAndOtherQualifications.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<LanguageAndOtherQualifications | null> => {
    const result = await prisma.languageAndOtherQualifications.delete({
        where: {
            id: id
        }
    })

    return result;
}


export const LanguageAndOtherQualificationsService = {
    create,
    getSingle,
    updateSingle,
    deleteSingle
}