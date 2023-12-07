import { WorkHistory } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: WorkHistory, userId: string): Promise<WorkHistory> => {

    const result = await prisma.workHistory.create({
        data: {
            ...payload,
            userId
        }
    })
    return result;
}

const getSingle = async (userId: string, id: string): Promise<WorkHistory | null> => {
    const result = await prisma.workHistory.findFirst({
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

const getAll = async (userId: string): Promise<WorkHistory[] | null> => {
    const result = await prisma.workHistory.findMany({
        where: {
            userId
        },

    })

    return result;
}

const updateSingle = async (data: Partial<WorkHistory>, id: string): Promise<WorkHistory> => {
    const result = await prisma.workHistory.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<WorkHistory | null> => {
    const result = await prisma.workHistory.delete({
        where: {
            id: id
        }
    })

    return result;
}


export const WorkHistoryService = {
    create,
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
}