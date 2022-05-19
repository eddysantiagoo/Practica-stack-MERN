const mongoose = require ('mongoosee')

mongoose.connection.on('open', () => console.log('db connect!'))

async function connectDb ({ host, port, dbName}) { 
    const uri = `mongodb://${host}:${port}/${dbName}` 
    mongoose.connect(uri, {useNewUrlParser: true});
}


module.exports = connectDb