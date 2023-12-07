import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { studyProgramFilterableFields } from "./studyProgram.constants";
import { StudyProgramsStudyProgram } from "./studyProgram.service";



const create = catchAsync(async (req, res) => {
    const result = await StudyProgramsStudyProgram.create(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudyProgram created successfully!",
        data: result
    })
})
const getAll = catchAsync(async (req, res) => {
    const filters = pick(req.query, studyProgramFilterableFields)
    const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);

    const result = await StudyProgramsStudyProgram.getAll(filters, options);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudyProgramss retrieved successfully!",
        meta: result.meta,
        data: result.data
    })
});

const getSingle = catchAsync(async (req, res) => {
    const result = await StudyProgramsStudyProgram.getSingle(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudyProgram retrieved successfully!",
        data: result
    })
});


const update = catchAsync(async (req, res) => {
    const result = await StudyProgramsStudyProgram.update(req.params.id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudyProgram updated successfully!",
        data: result
    })
});


const deleteOne = catchAsync(async (req, res) => {
    const result = await StudyProgramsStudyProgram.deleteOne(req.params.id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "StudyProgram deleted successfully!",
        data: result
    })
});




export const StudyProgramController = {
    create,
    getAll,
    getSingle,
    update,
    deleteOne
}