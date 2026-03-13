const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');
const authRoutes = require('./src/routes/auth');
const reporteRoutes = require('./src/routes/reportes');
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/reportes', reporteRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor de UrbanAlert corriendo en el puerto ${PORT}`);
});