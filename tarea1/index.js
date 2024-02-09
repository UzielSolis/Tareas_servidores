const express = require('express');
require('dotenv').config();
const rutas = require("./src/routes/index.routes")

const app = express();

app.use(express.json());
app.use(rutas);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    if(process.env.NODE_ENV == 'dev') {
        console.log('App is running in port ' + port)
    } else {
        console.log('App is running')
    }
});