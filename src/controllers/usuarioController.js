const Usuario = require('../models/Usuarios');
const generarJWT = require('../helpers/generateJWT');
const registrar = async (req, res) => {
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });
    if (existeUsuario) {
        const error = new Error('Este usuario ya está registrado');
        return res.status(400).json({ msg: error.message });
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        res.json({
            _id: usuarioGuardado._id,
            nombre: usuarioGuardado.nombre,
            email: usuarioGuardado.email
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error en el servidor al registrar' });
    }
};
const autenticar = async (req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        const error = new Error('El usuario no existe');
        return res.status(404).json({ msg: error.message });
    }
    const passwordCorrecto = await usuario.comprobarPassword(password);
    
    if (passwordCorrecto) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id)
        });
    } else {
        const error = new Error('La contraseña es incorrecta');
        return res.status(403).json({ msg: error.message });
    }
};

module.exports = {
    registrar,
    autenticar
};