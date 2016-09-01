var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');

router.delete('/:id' , function(req,res){
  var id = req.params.id;
  Hero.findByIdAndRemove("_id" , function(err , data){
    if(err){
      res.sendStatus(500);
    }
    res.send(data);
  });
});
module.exports = router;
