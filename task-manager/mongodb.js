// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017/'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        name: 'Amir',
        age: 21
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'Ali',
            age: 20
        }, {
            name: 'Bita',
            age: 20
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        }, {
            description: 'Renew inspection',
            completed: false
        }, {
            description: 'Pot plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!')
        }

        console.log(result.ops)
    })

    ////////////////////////////////////////////////////////

    db.collection('users').findOne({ _id: new ObjectID("..."), name: 'Amir', age: 1 }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 27 }).count((error, count) => {
        console.log(count)
    })

    db.collection('tasks').findOne({ _id: ObjectID("...") }, (error, task) => {
        console.log(task)
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })

    ////////////////////////////////////////////////////////////

    db.collection('users').updateOne({
        _id: new ObjectID("...")
    }, {
        $set: {
            name: 'Mike'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
})