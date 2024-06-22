const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello express!</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Amir',
        page: 'help',
        age: 21
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        page: 'Your weather',
        location: 'LA'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
