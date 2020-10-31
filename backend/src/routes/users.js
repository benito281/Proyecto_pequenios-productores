const router = require('express').Router();
const User = require('../models/User');

router.get('/getusers', async (req, res) => {
    
    const usuarios = await User.find();
    
    res.send(usuarios);
});


router.post('/adduser', async (req, res) => {

    const {nombres, apellido, correo,provincia } = req.body;
    const correoUsuario= await User.findOne({correo});
      if (correoUsuario) {
          res.send('El correo ya existe')
      } else {
        const usuario = {
            nombres,
            apellido,
            correo,
            provincia
        }
    
        const nuevousuario = new User(usuario);
        const nuevousuario2 = await nuevousuario.save();
    
        res.send('El usuario se a resgistrado correctamente');
      }
});

// Actualizar datos de usuario
router.put('/userupdate/:id', async (req, res) => {

    const {nombres, apellido, correo,provincia } = req.body;
    const usuario = {
        nombres,
        apellido,
        correo,
        provincia
    }

    const usuarioActualizado = await User.findByIdAndUpdate(req.params.id, usuario);

    res.send(usuarioActualizado);

});

router.delete('/userdelete/:id', async (req, res) => {
    
    const usuarioEliminado = await User.findByIdAndDelete(req.params.id);
    res.send(usuarioEliminado);
});

module.exports = router;

