var express = require('express');
var router = express.Router();

// db setup
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dmc1234',
  database: 'dmc',
  multipleStatements: true
});
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  var indexQuery = 'SELECT * FROM papers';
  var indexAllPapers = connection.query(indexQuery, function (err, rows) {
    if (err) throw err;
    else{
      res.render('admin', { title: 'Distributed Mobile Computing', rows:rows });
    }
  });  
});

router.post('/', function (req, res, next) {
    var title = req.body.title;
    var author = req.body.author;
    var info = req.body.info; 
    var isSCI;
    if(req.body.isSCI == "SCI"){
      isSCI = 0;
      console.log("SCI");
    }else{
      isSCI = 1;
      console.log("NON-SCI");
    }
    var insertQuery = "INSERT INTO papers (title, author, info, isSCI) VALUES('" + title + "', '" + author + "','" + info + "', '" + isSCI + "')" 
    var insertPaper = connection.query(insertQuery, function(err, rows){
      if (err) throw err;
      else if(rows.affectedRows > 0 ){
        console.log("Insert Success!");
      }
      res.send({result: true, title: title, author: author, isSCI: isSCI, info: info});
    })
  })
module.exports = router;