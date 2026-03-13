const express = require('express');
const router = express.Router();
const { crearReporte, obtenerReportes } = require('../controllers/reporteController');
const checkAuth = require('../middlewares/auth');
router.post('/', checkAuth, crearReporte);
router.get('/', checkAuth, obtenerReportes);
module.exports = router;