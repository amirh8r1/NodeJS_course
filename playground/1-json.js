const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)

const newDataBuffer = fs.readFileSync('json.json')
const newDataJSON = newDataBuffer.toString()
const newData = JSON.parse(newDataJSON)
newData.name = 'Amir'
newData.age = 21
const shouldStore = JSON.stringify(newData)
fs.writeFileSync('json.json', shouldStore)
