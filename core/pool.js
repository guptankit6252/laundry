const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    // connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    // port: '3000',
    password: 'Gupta@123',
    database: 'www2',
    // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

pool.getConnection((err, connection) => {
    if(err)
        console.error("Something went wrong connecting to the database...");

    if(connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;