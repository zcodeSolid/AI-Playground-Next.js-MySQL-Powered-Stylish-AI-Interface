// lib/db.js

import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost', // replace with your MySQL host
  user: 'root',      // replace with your MySQL user
  password: '', // replace with your MySQL password
  database: 'my_database', // replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

export default connection;
