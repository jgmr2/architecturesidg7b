require('dotenv').config();
//tools
const express = require('express');
//const { createClient } = require('@supabase/supabase-js');
const connectDB = require('./src/config/database');
const reportesRoutes = require("./src/routes/reportes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //Communication

//DB connection
connectDB();

//Main Routes
app.use("/api/reportes",reportes );

//supabase client
//const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

//route example
//app.get('/', async (req, res) => {
    //subabase health check
    //const { data, error } = await supabase.from('profiles').select('*').limit(1);
    //res.json({
        //message: 'Welcome to UrbanAlert API.', 
        //Database_nosql: mongoose.connection.readyState === 1 ? 'connection ready' : 'disconnected', 
        //supabase_auth: error ? 'error connection' : 'Online'});
//});

app.listen(PORT, () => {
    console.log(`port connection running in: http://localhost:${PORT}`);
});