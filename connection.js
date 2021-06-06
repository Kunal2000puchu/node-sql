const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2005',
    database: 'puchu',
    plugin: 'mysql_native_password',
    multipleStatements: true
});

mysqlConnection.connect(function(err){
    if(!err){
        console.log("Connected");
    }
    else{
        console.log("Connection Failed");
    }
});

module.exports = mysqlConnection;