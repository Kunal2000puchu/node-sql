const express = require('express');
const bodyParser = require('body-Parser');
const PeopleRoutes = require('./routes/people');
const app = express();
const mysqlConnection = require('./connection')
app.use(bodyParser.json());
app.use('/people',PeopleRoutes);


app.listen('3030', function(){
    console.log('listening on');
});