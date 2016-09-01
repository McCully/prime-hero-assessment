var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');

router.post('/' , function(req , res){
  var hero = Hero(req.body);
  hero.save(function(err){
    if(err){
      console.log('post err ' , err);
      res.sendStatus(500);
      return
    }
    res.sendStatus(201);
  });
});
module.exports = router;
