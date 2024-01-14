import { EducationHistory } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (data: EducationHistory[], userId: string) => {
    const results = await prisma.educationHistory.createMany({
        data: data.map(item => ({
            userId: userId,
            levelOfEducation: item.levelOfEducation,
            startOfStudies: item.startOfStudies,
            expectedPassingYear: item.expectedPassingYear,
            officialName: item.officialName,
            groupMajorName: item.groupMajorName,
            subjectName: item.subjectName,
            mediumOfInstruction: item.mediumOfInstruction,
            gpa: item.gpa,
        })),
    });

    return results;

};

const createSingle = async (data: EducationHistory, userId: string) => {
    const result = await prisma.educationHistory.create({
        data: {
            ...data, userId
        }
    })
    return result;
}







const getSingle = async (userId: string, id: string): Promise<EducationHistory | null> => {
    const result = await prisma.educationHistory.findFirst({
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

const getAll = async (userId: string): Promise<EducationHistory[] | null> => {
    const result = await prisma.educationHistory.findMany({
        where: {
            userId
        },

    })

    return result;
}

const updateSingle = async (data: Partial<EducationHistory>, id: string): Promise<EducationHistory> => {
    const result = await prisma.educationHistory.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<EducationHistory | null> => {
    const result = await prisma.educationHistory.delete({
        where: {
            id: id
        }
    })

    return result;
}


export const EducationHistoryService = {
    create,
    createSingle,
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
}