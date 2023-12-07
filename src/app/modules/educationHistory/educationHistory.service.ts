import { EducationHistory } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: EducationHistory, userId: string): Promise<EducationHistory> => {

    const result = await prisma.educationHistory.create({
        data: {
            ...payload,
            userId
        }
    })
    return result;
}

const getSingle = async (userId: string): Promise<EducationHistory | null> => {
    const result = await prisma.educationHistory.findFirst({
        where: {
            userId
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
        include: {
            user: true
        }
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
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
}