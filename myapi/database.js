const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'netuser',
    password: 'netuser',
    database: 'netdb'
});
module.exports = connection;