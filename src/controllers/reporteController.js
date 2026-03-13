const Reporte = require('../models/Reporte');
const crearReporte = async (req, res) => {
    const reporte = new Reporte(req.body);
    reporte.usuario = req.usuario._id;

    try {
        const reporteGuardado = await reporte.save();
        res.json(reporteGuardado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al guardar el reporte en la base de datos' });
    }
};

const obtenerReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find().populate('usuario', 'nombre email');
        res.json(reportes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Hubo un error al obtener los reportes' });
    }
};

module.exports = {
    crearReporte,
    obtenerReportes
};