var express = require('express');
var router = express.Router();
var fs = require('fs');

var jsonFile = fs.readFileSync('./public/files/paper.json')

var obj = JSON.parse(jsonFile);
var obj_length = Object.keys(obj.papers).length;


// db setup
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'rlarkgus',
//   database: 'dmc',
//   multipleStatements: true
// });
// connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {

  console.log(obj.papers[0]);
  console.log(obj.papers[1]);
  console.log(obj_length)

  res.render('papers', { title: 'Distributed Mobile Computing', papers: obj, obj_length: obj_length});

  // var indexQuery = 'SELECT * FROM papers';
  // var indexAllPapers = connection.query(indexQuery, function (err, rows) {
  //   if (err) throw err;
  //   else {
  //     for(i in rows){
  //       console.log(rows[i]._id);
  //       console.log(rows[i].title);
  //       console.log(rows[i].author);
  //       console.log(rows[i].info);
  //       console.log("--------------");
  //     }
  //   }
  //   res.render('papers', { title: 'Distributed Mobile Computing', rows: rows});
  // });
});


router.post('/', function(req, res, next){
  var keyword = req.body.keyword;

  console.log(obj.papers[0]);
  console.log(obj.papers[1]);
  console.log(obj_length)

  for(var i=0; i<3; i++){
    if(keyword == obj.papers[i].title)


    console.log(obj.papers[i])
  }

})

module.exports = router;

