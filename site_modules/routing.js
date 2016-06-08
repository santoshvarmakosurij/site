var express = require('express');

var router = express.Router();

//routing and management of application
router.get('/',function(req,res){
  res.redirect('/home');
});

router.get('/home',function(req,res){
  res.render('home',{});
});

module.exports = router;