const express = require('express');
const routes = require('./src/routes/index.routes');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use(routes);

let port = process.env.PORT;

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