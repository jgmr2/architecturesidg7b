const express = require('express');
const router = express.Router();
const { registrar, autenticar } = require('../controllers/usuarioController');
router.post('/registrar', registrar);
router.post('/login', autenticar);
module.exports = router;