const mongo = require ('mongodb').MongoClient,
      url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect (url, (err, db) => {
    if (err) throw err
    db.collection ('prices').aggregate ([
        {$match: { size: process.argv[2]}},
        {$group: { 
            _id: 'average',
            average: {
                $avg: '$price'
            }
        }}
    ], (err, res) => {
        if (err) throw err
        console.log (Number(res[0].average).toFixed (2))
    })
    db.close ()
})