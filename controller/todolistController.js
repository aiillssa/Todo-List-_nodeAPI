//import product model, express async-handler
const Task = require ('../models/task')
const asyncHandler = require ('express-async-handler')

const getAllTasks = asyncHandler(async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error){
        processError(error, res);
    }
})

const getTask = asyncHandler (async (req, res) => {
    try {
        const id = req.params.id
        const tasks = await Task.findById(id)
        res.status(200).json (tasks)
    } catch (error){
        // res.status (500);
        // throw new Error (error.message);
        processError(error, res);
        
    }

})

const createTask = asyncHandler (async (req, res) => {
    try {
        const tasks = await Task.create(req.body)
        res.status(200).json(tasks)
    } catch (error){
        processError(error, res);
    }
})

const updateTask = asyncHandler (async (req, res) => {
    try {
        const id = req.params.id
        const tasks = await Task.findByIdAndUpdate(id, req.body)
        const updatedTask = await Task.findById(id)
        res.status(200).json(updatedTask)
    } catch (error){
        processError(error, res);
    }
})

const deleteTask = asyncHandler (async (req, res) => {
    try {
        const id = req.params.id
        const tasks = await Task.findByIdAndDelete(id)
        res.status(200).json(tasks)
    } catch (error){
        processError(error, res);
    }

})

const processError = (error, res) => {
    res.status (500);
    throw new Error (error.message)
}

module.exports = {
    getAllTasks,
    getTask, 
    createTask, 
    updateTask,
    deleteTask
}