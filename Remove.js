const mongo = require ('mongodb').MongoClient,
      url = `mongodb://localhost:27017/${process.argv[2]}`

mongo.connect (url, (err, db) => {
    if (err) throw err
    db.collection (process.argv[3]).remove ({
        _id: process.argv[4]
    })
    db.close ()
})