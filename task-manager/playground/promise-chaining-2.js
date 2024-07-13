require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('example-id').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete('example-id')
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('example-id').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
