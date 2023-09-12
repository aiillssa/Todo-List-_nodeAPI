const mongoose = require ('mongoose')
const taskSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        date: {
            type: Date, 
            required: false,
        }
    }
)

//model takes 2 parameters (name of model, schema of model), this method basically turns it into a mongodb model
//allows us to interact directly w db
const Task = mongoose.model ("Task", taskSchema);
module.exports = Task;