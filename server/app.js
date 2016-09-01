/** ---------- THIRD PARTY MODULES ---------- **/
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/** ---------- OUR MODULES ---------- **/
var data = require('./routes/data.js')

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/data', data)
/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
var databaseUri = 'mongodb://localhost:27017/omicron';
mongoose.connect(databaseUri);
mongoose.connection.on('connected' , function(){
  console.log("Eagle One has connected to: " , databaseUri);
});
mongoose.connection.on('error' , function(err){
  console.log("Eagle one failed because error: " , err);
})

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});
