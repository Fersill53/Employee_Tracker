const mysql = require('mysql2');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

module.exports = connection;