const mongo = require ('mongodb').MongoClient,
      url = 'mongodb://localhost:27017/learnyoumongo'

var user = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    }

mongo.connect (url, (err, db) => {
    if (err) throw err
    let cursor = db.collection('users')
    cursor.insert (user, (err, data) => {
        if (err) {throw err}
        console.log (JSON.stringify(user))
    })
    db.close ()
})