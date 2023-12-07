import { ExtraCurricularActivity } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: ExtraCurricularActivity, userId: string): Promise<ExtraCurricularActivity> => {

    const result = await prisma.extraCurricularActivity.create({
        data: {
            ...payload,
            userId
        }
    })
    return result;
}

const getSingle = async (userId: string, id: string): Promise<ExtraCurricularActivity | null> => {
    const result = await prisma.extraCurricularActivity.findFirst({
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

const getAll = async (userId: string): Promise<ExtraCurricularActivity[] | null> => {
    const result = await prisma.extraCurricularActivity.findMany({
        where: {
            userId
        },

    })

    return result;
}

const updateSingle = async (data: Partial<ExtraCurricularActivity>, id: string): Promise<ExtraCurricularActivity> => {
    const result = await prisma.extraCurricularActivity.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<ExtraCurricularActivity | null> => {
    const result = await prisma.extraCurricularActivity.delete({
        where: {
            id: id
        }
    })

    return result;
}


export const ExtraCurricularActivityService = {
    create,
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
}