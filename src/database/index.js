var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'company'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected')
});

SelectOrCreateTable = () => {
  connection.query('SELECT * FROM registros', (err, result, fields) => {
    if (err){
      const sql = 'CREATE TABLE registros (id INT AUTO_INCREMENT PRIMARY KEY, valor1 BIGINT, valor2 BIGINT, resultado BIGINT)';
      connection.query(sql, (err, result) => {
        if(err) throw err;
      });
    }
  });
}

SelectOrCreateTable();

connection.end();

module.exports = connection