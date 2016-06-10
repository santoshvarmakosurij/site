var express = require('express');

var router = express.Router();

//routing and management of application
router.get('/',function(req,res){
  res.redirect('/home');
});

router.get('/home',function(req,res){
  res.render('home',{});
});

router.get('/blog',function(req,res){
  res.render('blog',{});
});

module.exports = router;