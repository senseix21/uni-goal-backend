import { Skills } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: Skills, userId: string): Promise<Skills> => {

    const result = await prisma.skills.create({
        data: {
            ...payload,
            userId
        }
    })
    return result;
}

const getSingle = async (userId: string, id: string): Promise<Skills | null> => {
    const result = await prisma.skills.findFirst({
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

const getAll = async (userId: string): Promise<Skills[] | null> => {
    const result = await prisma.skills.findMany({
        where: {
            userId
        },

    })

    return result;
}

const updateSingle = async (data: Partial<Skills>, id: string): Promise<Skills> => {
    const result = await prisma.skills.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<Skills | null> => {
    const result = await prisma.skills.delete({
        where: {
            id: id
        }
    })

    return result;
}


export const SkillsService = {
    create,
    getSingle,
    getAll,
    updateSingle,
    deleteSingle
}