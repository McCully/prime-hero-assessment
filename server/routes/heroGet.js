var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');

router.get('/', function(req, res){
  Hero.find({} , function(err , heros){
    if(err){
      res.sendStatus(500);
      return;
    }
    res.send(heros);
  });
});
module.exports = router;
