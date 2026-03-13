const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuarios');

const checkAuth = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.usuario = await Usuario.findById(decoded.id).select('-password');
            return next();
        } catch (error) {
            return res.status(401).json({ msg: 'Hubo un error, token no válido o expirado' });
        }
    }
    if (!token) {
        const error = new Error('No estás autenticado, token no proporcionado');
        return res.status(401).json({ msg: error.message });
    }
};

module.exports = checkAuth;