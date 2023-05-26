const mysql = require('mysql');

const  con = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "",
    database: "census_db"
  });

  module.exports =con;
  