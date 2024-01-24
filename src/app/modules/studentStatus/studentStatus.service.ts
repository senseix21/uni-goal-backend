import { StudentStatus } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: StudentStatus, userId: string): Promise<StudentStatus> => {
    // Check if the user has already added StudentStatus
    const existingItem = await prisma.studentStatus.findFirst({
        where: {
            userId,
        },
    });

    if (existingItem) {
        throw new Error("Student Status  already exist for the user");
    }


    // If the StudentStatus is not already in the user Profile, add it
    const result = await prisma.studentStatus.create({
        data: {
            ...payload,
            userId
        }
    })
    return result;
}

const getSingle = async (id: string): Promise<StudentStatus | null> => {
    const result = await prisma.studentStatus.findFirst({
        where: {
            id
        },
        include: {
            user: true
        }
    })

    return result;
}


const updateSingle = async (data: Partial<StudentStatus>, id: string): Promise<StudentStatus> => {
    const result = await prisma.studentStatus.update({
        where: {
            id: id
        },
        data: data
    })

    return result;
}

const deleteSingle = async (id: string): Promise<StudentStatus | null> => {
    const result = await prisma.studentStatus.delete({
        where: {
            id: id
        }
    })

    return result;
}

const assignCounselorToStudent = async (counselorId: string, studentStatusId: string): Promise<StudentStatus> => {
    const result = await prisma.studentStatus.update({
        where: { id: studentStatusId },
        data: {
            counselorId: counselorId,
        },
        include: {
            counselor: true
        }
    });

    return result;
};


export const StudentStatusService = {
    create,
    getSingle,
    updateSingle,
    deleteSingle,
    assignCounselorToStudent
}