const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const rutas = require('./src/routes/index.routes');

const app = express();

app.use(rutas);

let port = process.env.PORT || 3000;

// Connect to database
const db_url = process.env.DB_URL;
async function start() {
    try {
        await mongoose.connect(db_url);
        console.log('Connected to db');
        app.listen(port, () => {
            console.log('App is running in port ' + port)
        });
    } catch(e) {
        console.log('failed to conncet to db', e)
    }
}

start();