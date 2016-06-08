var express = require('express');
var ejs = require('ejs');
var path = require('path');

//Custom modeules
var router = require('./site_modules/routing.js');

var app = express();
var port = process.env.PORT || 9999;

//configure app
app.set('views', path.join(__dirname, '/site/views'));
app.set('view engine', 'ejs');
app.set('view cache',false);

//use router module
app.use(router);

var http = require('http').Server(app);
// start the server at localhost:9999
http.listen(port, function(){
  console.log('server is running at http://127.0.0.1:9999');
});