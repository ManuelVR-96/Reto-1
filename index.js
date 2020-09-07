const express = require('express');
const axios = require('axios').default;

const app = express();

const port = 4000

app.use(express.json());
app.use('/', require('./routes/contagiados'));

app.listen(port, ()=>{

    console.log(`corriendo en el puerto ${port}`)
})