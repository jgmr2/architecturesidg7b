const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    ubicacion: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        enum: ['Pendiente', 'En Progreso', 'Resuelto'],
        default: 'Pendiente'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Reporte', reporteSchema);