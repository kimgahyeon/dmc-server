var express = require('express');
var router = express.Router();
var fs = require('fs');
const connection = require('../model/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  var jsonFile = fs.readFileSync('./public/files/project.json')

  var obj = JSON.parse(jsonFile);
  var obj_length = Object.keys(obj.projects).length;

  console.log(obj.projects[0]);
  console.log(obj.projects[1]);
  console.log(obj_length)

  res.render('project', { title: 'Distributed Mobile Computing', projects: obj, obj_length: obj_length });
});

router.get('/all', (req, res) => {
  const sql = 'SELECT * FROM projects';
  connection.query(sql, (err, rows) => {
    if(err) throw err;
    else {

    }
    res.status(200).send({ projects: { title: 'Distributed Mobile Computing', rows: rows } })
  });
});

module.exports = router;
