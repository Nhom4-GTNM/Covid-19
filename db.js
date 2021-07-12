const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'VINN\Vinn',
    password:'',
    database:'appcovid19'
});

module.exports = db