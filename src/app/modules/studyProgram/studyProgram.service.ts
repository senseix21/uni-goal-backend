import { StudyProgram } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { prisma } from "../../../shared/prisma";
import { studyProgramSearchableFields } from "./studyProgram.constants";


const create = async (payload: StudyProgram): Promise<StudyProgram> => {
    const result = await prisma.studyProgram.create({
        data: payload,

    });

    return result;
}

const getAll = async (filters: any, options: IPaginationOptions): Promise<IGenericResponse<StudyProgram[]>> => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);
    const { search, ...filtersData } = filters;

    const andConditions = [];


    if (search) {
        andConditions.push({
            OR: studyProgramSearchableFields.map((field) => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive'
                }
            }))
        })
    }


    if (Object.keys(filtersData).length > 0) {
        andConditions.push({
            AND: Object.keys(filtersData).map(key => ({
                [key]: {
                    equals: (filtersData as any)[key]
                }
            }))
        })
    }



    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.studyProgram.findMany({
        skip,
        take: size,
        where: whereConditions,

        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                id: 'desc'
            }

    })

    const total = await prisma.studyProgram.count({ where: whereConditions });

    return {
        meta: {
            page: page,
            size: size,
            total: total,
            totalPage: Math.floor(total / size + 1)
        },
        data: result
    };
}


const getSingle = async (id: string): Promise<StudyProgram | null> => {
    const result = await prisma.studyProgram.findUnique({
        where: {
            id: id
        },


    });

    return result;
}

const update = async (id: string, payload: Partial<StudyProgram>): Promise<StudyProgram> => {
    const result = await prisma.studyProgram.update({
        where: { id: id },
        data: payload,

    });

    return result;
}

const deleteOne = async (id: string) => {
    const result = await prisma.studyProgram.delete({
        where: { id: id },

    })

    return result;
}


export const StudyProgramsStudyProgram = {
    create,
    getAll,
    getSingle,
    update,
    deleteOne
}