var express = require('express');
var router = express.Router();

var models = require('../models');

var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var exphbs = require('express-handlebars');
var passport = require('passport');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); //session secret

/* Renders Accounts view */
router.get('/signin', function(req, res) {
  res.render('signin');
});

router.post('/signin', function(req, res){
  var isValidPassword = function(userpass, password) {
    return bcrypt.compareSync(password, userpass);
  }

  models.User.findOne({
    where:{
      UserID : req.body.email
    }
  }).then(user =>{
    if(user){
      if(isValidPassword(user.UserPWD, req.body.password)){
        req.session.user_uid = req.body.email;
        res.redirect('/');
        Bert.alert("You are now Signed in", "success", "growl-top-right");
      } else{
        res.redirect('/signup');
        Bert.alert("Wrong Password", "danger", "growl-top-right");
      }
    }else{
      res.redirect('/signin');
      Bert.alert("Email not exist", "danger", "growl-top-right");
    }
  })
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/signup', function(req, res){
  var generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  models.User.findOne({
    where: {
      UserID : req.body.email
    }
  }).then(user =>{
    if(!user){
      var userPassword = generateHash(req.body.password);

      models.User.create({
        UserID: req.body.email,
        UserPWD: userPassword,
        UserName: req.body.name,
        UserClass: req.body.class
      }).then(result =>{
        res.redirect('/index_login');
        Bert.alert("You are now Signed up", "success", "growl-top-right");
      })
      .catch(err =>{
        res.redirect('/accounts/signup');
        Bert.alert("Your signup form is Wrong", "danger", "growl-top-right");
      })
    }
    else{
      res.redirect('/signin');
      Bert.alert("Email already exist", "danger", "growl-top-right");
    }
  })
});

router.get('/contract', isLoggedIn, function(req, res) {
  res.render('contract');
});

router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.session == true)
    return next();
  res.redirect('/signin');
}

module.exports = router;
