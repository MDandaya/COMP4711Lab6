const mysql = require('mysql2');

// connect to a database artistbook running on your localmachine
const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'jPIhBvGiiy',
    database: 'jPIhBvGiiy',
    password: 'ntsXnSRMlx'
});

module.exports = pool.promise();