var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var exphbs = require('express-handlebars');
var passport = require('passport');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); //session secret

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.user_uid){
		res.render('index_login');
	}else{
	  res.render('index', { title: 'Express' });
	}
});

module.exports = router;
