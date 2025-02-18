const express = require('express');
require('./db/connect');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port=process.env.PORT || 3000;

//Middleware
app.use('/',require('../routers/routes.js'));

//Static Files
app.use(express.static('public'));

//Template Engine
app.set('view engine','hbs');
hbs.registerPartials(path.join(__dirname,'../templates/partials'));

//Views
app.set('views',path.join(__dirname,'../templates/views'));

//Server Listening
app.listen(port,()=>{
    console.log(`Server is running on: http://localhost:${port}`);
})