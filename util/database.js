const mysql = require('mysql2');

// connect to a database artistbook running on your localmachine
const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'b7UuofOqP2',
    database: 'b7UuofOqP2',
    password: ' 8LuOhBQah0'
});

module.exports = pool.promise();
