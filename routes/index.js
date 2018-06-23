var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var exphbs = require('express-handlebars');
var passport = require('passport');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); //session secret

/* GET home page. */
router.get('/', function(req, res, next) {
	/* for find contract address code */
  // var badress = web3.eth.getTransactionReceipt('0xf1f23249a5e474b03af2b673d6bebb755a8e050a5dc3be223b333c87903bfdd6');
  // console.log(badress);
  // var baddress = web3.eth.getBlock(1);
  // console.log(baddress);  
	if(req.session.user_uid){
		res.render('index_login');
	}else{
	  res.render('index', { title: 'Express' });
	}
});

module.exports = router;
