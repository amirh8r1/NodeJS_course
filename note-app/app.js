const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.green.bold.inverse('Success!')
console.log(greenMsg)
