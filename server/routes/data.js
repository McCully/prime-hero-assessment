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

router.delete('/:id' , function(req,res){
  var id = req.params.id;
  console.log(id);
  Hero.findByIdAndRemove(id , function(err , data){
    if(err){
      res.sendStatus(500);
    }
    res.send(data);
  });
});

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
