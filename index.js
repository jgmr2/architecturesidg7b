require('dotenv').config();

//tools
const express = require('express');
const mongoose = require('mongoose');
const { createClient } = require('@supabase/supabase-js');
const { DatabaseSync } = require('node:sqlite');

const app = express();
const PORT = process.env.PORT || 3000;

//supabase client
const supabase = createClient(process.env.SUPBASE_URL, process.env.SUPBASE_KEY);

//mongoose connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('successfully connected to MongoDB'))
    .catch(err=> console.error('MongoDB connection error:', err));

//route example
app.get('/', async (req, res) => {
    //subabase health check
    const { data, error } = await supabase.from('profiles').select('*').limit(1);
    res.json({
        message: 'Welcome to UrbanAlert API.', 
        Database_nosql: mongoose.connection.readyState === 1 ? 'connection ready' : 'disconnected', 
        supabase_auth: error ? 'error connection' : 'Online',});
});

app.listen(PORT, () => {
    console.log(`port connection running in: http://localhost:${PORT}`);
});