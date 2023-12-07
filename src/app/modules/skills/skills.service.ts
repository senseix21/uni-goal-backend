import { Skills } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: Skills, userId: string): Promise<Skills> => {
    // Check if the user has already added skills
    const existingCartItem = await prisma.skills.findFirst({
        where: {
            userId,
        },
    });

    if (existingCartItem) {
        throw new Error("Profile Information already exist for the user");
    }

    // Check if the number of skills exceeds the allowed limit (6)
    if (payload.skillNames.length > 6) {
        throw new Error("Number of skills exceeds the limit (6)");
    }

    // If the skills is not already in the user Profile, add it
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
    updateSingle,
    deleteSingle
}