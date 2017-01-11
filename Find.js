const mongo = require ('mongodb').MongoClient,
      dbUrl = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect (dbUrl, (err, db) => {
    if (err) {
        console.error (err)
        return
    }
    let cursor = db.collection ('parrots')
    cursor.find ({age: {$gt: +process.argv[2]}})
    .toArray ((err, documents) => {
        if (err)  {
        console.error (err)
        return
        }
       console.log (documents) 
    })
    db.close ()
})