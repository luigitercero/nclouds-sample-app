const fs = require('fs')

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var image_tag
  
  try {
    const data = fs.readFileSync('.git/ORIG_HEAD', 'utf8')
    image_tag = data.substring(0, 8)
  } catch (err) {
    try {
      const failover = fs.readFileSync('.git/shallow', 'utf8')
      image_tag = failover.substring(0, 8)
    } catch (err) {
      image_tag = 'latest'
    }
  }

  custom_message = process.env.CUSTOM_MESSAGE || 'This is a sample app :)';

  res.render('index', { title: 'nClouds', message: custom_message, info: 'Docker image version -> ' + image_tag });
});

module.exports = router;
