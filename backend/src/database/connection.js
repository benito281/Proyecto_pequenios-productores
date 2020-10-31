// Using Node.js `require()`
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI ;

const conectarDB = async () => {
    await mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
}
conectarDB();

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('La base de datos esta conectada');
});

