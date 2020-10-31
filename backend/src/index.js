const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const upload=require('express-fileupload')
const body=require('body-parser');
const path=require('path');
require('./database/connection')
//Configuramos el servidor
app.set(express.static(path.join(__dirname, '/public')));
app.set('port', process.env.PORT || 3000)

//Middlewars
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
    next();
})


//Rutas
app.use('/users',require('./routes/users'))


//Iniciamos el servidor en el puerto
app.listen(app.get('port'), ()=> {
    console.log(`El servidor esta corriendo en el puerto ${app.get('port')}`);
});