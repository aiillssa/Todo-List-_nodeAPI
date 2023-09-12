//have to import express and controller
const express = require('express')
//Use the express.Router class to create modular, mountable route handlers. 
//A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
//TLDR: basically routers kinda just store all routes into like one thing
const router = express.Router()
const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require ('../controller/todolistController')
 
router.get('/', getAllTasks)
router.get('/task/:id', getTask)
router.post('/create', createTask)
router.put('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

module.exports = router;
