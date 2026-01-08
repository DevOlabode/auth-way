require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

require('./config/database')();

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`App is listening on PORT ${PORT}`)
});