var express = require ('express');
var app = express();
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');
var port = process.env.PORT || 8888;

//uses
app.use(express.static('public') );
app.use(bodyParser.json() );

//mongoose stuff
mongoose.connect('mongodb://localhost:27017/movie-db');
mongoose.connection.on('connected', function(){
  console.log('Connected to the DB');
});
mongoose.connection.on('error', function(){
  console.log('Not connect to the database');
});

//spin up server
app.listen(port, function(req, res){
  console.log('server up on :', port);
});
