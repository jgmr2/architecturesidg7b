const Reporte = require('../models/Reporte');
//Get all reports
//req = request body {} params url?param1=datos123.
exports.getReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find();
        res.json(reportes);
    }catch (error) {
        res.status(500).json({ error: 'Error al obtener los reportes', message: error});
    }
}
//create new report
exports.createReporte = async (req, res) =>{
    try{
        const { titulo, descripcion, ubicacion} = req.body;
        //logica de negocio
        let prioridad = 'media';
        if (descripcion.toLowerCase().includes('fuego') || descripcion.toLowerCase().includes('incendio')
        ) {
            prioridad = 'alta';
        }
        const nuevoReporte = new Reporte({
            titulo,
            descripcion,
            ubicacion,
            prioridad
        });
        await nuevoReporte.save();
        res.status(201).json(nuevoReporte);
    }catch (error) {
        res.status(400).json({ error: 'Error al crear el reporte', message: error});
    }
}