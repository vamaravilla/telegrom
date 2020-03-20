const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://user:user12345@cluster0-idnwc.azure.mongodb.net/test?retryWrites=true&w=majority');
app.unsubscribe(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
socket.connect(server);
router(app);

app.use('/app',express.static('public'));
app.use(express.static('public'));

app.listen(3000,function(){
    console.log('La aplicación esta corriendo en http://localhost:3000');
});