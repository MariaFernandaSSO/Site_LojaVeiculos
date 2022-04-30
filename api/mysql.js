//express
const express = require('express');
const server = express();

const mysql = require('mysql2');
const banco = mysql.createPool({
    host: "localhost",
    database: "2e_gb_210922",
    user: "root",
    password: ""
});

exports.banco = banco