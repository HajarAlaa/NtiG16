const{MongoClient}=require('mongodb')
const dbURL="mongodb://127.0.0.1:27017"
const dbName="bank"
const connection=(cb)=>{
    MongoClient.connect(dbURL,{},(err,client)=>{
        if(err) return cb (err,false)
        const connection=client.db(dbName)
        cb (false,connection)
    })
}
const add = (table,data)=>{
    MongoClient.connect( dbURL, {}, (err, client)=>{
        if(err) return console.log("database error")
        const connection = client.db(dbName)
        connection.collection(table).insertOne(
            data,
            (error, res)=>{
                if(error) return console.log("error data")
            }
        )
    })
}
module.exports = {connection,add}