const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombres: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique:true
    },
    provincia: {
        type: String,
        required: true
    }

},
{
    timestamps:true
});

module.exports = mongoose.model('User', userSchema);