require('dotenv').config();

const express = require('express');
const app = express();

const ejsMate = require('ejs-mate');

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

require('./config/database')();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`App is listening on PORT ${PORT}`)
});