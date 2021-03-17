require('dotenv').config();

const express = require('express');
const router = require('./app/router');

const port = 3000;

const app = express();

app.use(router);


app.listen( port, () => {
    console.log(`Server is listening on port ${port}`)
})





