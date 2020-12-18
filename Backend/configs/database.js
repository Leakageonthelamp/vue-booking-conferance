const mysql = require('mysql')
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'secret',
    database: 'meeting_room_db',
    charset: 'utf8'
})

module.exports = connection;