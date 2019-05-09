const express = require('express');
const cors = require('cors');
const app = express().use('*', cors());
const User = require('./models/list.js');
const mongoose = require('mongoose');
const db = mongoose.connection;
const bodyParser = require('body-parser');
const router = express.Router();

db.on('error', console.error);
db.once('open', () => {
    console.log('DB connection success.');
})
mongoose.connect("mongodb://localhost/tarotcards")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/getCardByName', (req, res) => {
    console.log('11');
    res.send('hi');
})

app.get('/a', (req, res) => {
    console.log('aaaa');
})

const server =app.listen(8080, ()=>{
    console.log('server is running');
})