var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//Sync database
models.sequelize.sync().then(function() {
  console.log("Nice! Database looks fine");
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!");
});

app.get('/', function(req, res) {
  res.send("Welcome to Passport with Sequelize");
});

app.listen(5000, function(err) {
  if(err)
    console.log("Site is live");
  else console.log(err);
});

//For bodyParser
app.use(bodyParser.urlencoded({ extened: true }));
app.use(bodyParser.json());

//For passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

//For handlebars
app.set('views', './app/views');
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
