const express = require('express');
const router = express.Router();
const fs = require('fs');

const jsonFile = fs.readFileSync('./public/files/paper.json')

const obj = JSON.parse(jsonFile);
const obj_length = Object.keys(obj.papers).length;

const connection = require('../model/connection');
connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {

  console.log(obj.papers[0]);
  console.log(obj.papers[1]);
  console.log(obj_length)

  res.render('papers', { title: 'Distributed Mobile Computing', papers: obj, obj_length: obj_length});


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


router.get('/all', (req, res) => {
  const sql = 'SELECT * FROM papers';
  connection.query(sql, function (err, rows) {
    if (err) throw err;
    else {
      // for(i in rows){
      //   console.log(rows[i]._id);
      //   console.log(rows[i].title);
      //   console.log(rows[i].author);
      //   console.log(rows[i].info);
      //   console.log("--------------");
      // }
    }
    res.status(200).send({ papers: { title: 'Distributed Mobile Computing', rows: rows } });
  });
});

module.exports = router;

