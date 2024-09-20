const mysql = require("mysql");


const db_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "antemployee",
    port : "3306"
    
});

module.exports = db_connection;