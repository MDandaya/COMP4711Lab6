const mysql = require('mysql2');

// connect to a database artistbook running on your localmachine
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'artistbook',
    password: ''
});

module.exports = pool.promise();