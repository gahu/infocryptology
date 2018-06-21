var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recipesRouter = require('./routes/recipes');
var accountsRouter = require('./routes/accounts');
var authRouter = require('./routes/auth');
var contractRouter = require('./routes/contract');
var models = require('./models');

var app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const exphbs = require('express-handlebars');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/contract',contractRouter);
app.use(cookieParser());
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// default route
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/accounts', accountsRouter);
app.use('/auth', authRouter);

app.get('/accounts/signup', function(req, res){
  res.render('signup');
});

app.post('/accounts/signup', function(req, res){
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
        res.redirect('/');
        Bert.alert("You are now Signed up", "success", "growl-top-right");
      })
      .catch(err =>{
        res.redirect('/accounts/signup');
        Bert.alert("Your signup form is Wrong", "danger", "growl-top-right");
      })
    }
    else{
      res.redirect('/accounts/signin');
      Bert.alert("Email already exist", "danger", "growl-top-right");
    }
  })
});

app.get('/accounts/sginup', function(req, res){
  res.render('signin');
});

app.post('/accounts/signin', function(req, res){
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
        res.redirect('/accounts/signup');
        Bert.alert("Wrong Password", "danger", "growl-top-right");
      }
    }else{
      res.redirect('accounts/signin');
      Bert.alert("Email not exist", "danger", "growl-top-right");
    }
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
