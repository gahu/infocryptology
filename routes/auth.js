var express = require('express');
var router = express.Router();

var models = require('../models');

var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var exphbs = require('express-handlebars');
var passport = require('passport');

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_lessor",
        "type": "string"
      },
      {
        "name": "_hirer",
        "type": "string"
      },
      {
        "name": "_broker",
        "type": "string"
      },
      {
        "name": "_address",
        "type": "string"
      },
      {
        "name": "_ContractDate",
        "type": "string"
      },
      {
        "name": "_ExpireDate",
        "type": "string"
      },
      {
        "name": "_payment",
        "type": "string"
      }
    ],
    "name": "addContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getContractNumber",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_ContractNumber",
        "type": "uint256"
      }
    ],
    "name": "getContracts",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
var ContractAddress = '0x26c09fb556729f44290408e6de9ee39e393c7e9e';
var HouseCon = web3.eth.contract(abi);
var HouseContract = HouseCon.at(ContractAddress);

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
      } else{
        res.redirect('/auth/signin');
      }
    }else{
      res.redirect('/auth/signup');
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
        res.redirect('/auth/signin');
      })
      .catch(err =>{
        res.redirect('/auth/signup');
      })
    }
    else{
      res.redirect('/auth/signup');
    }
  })
});

router.get('/contract', isLoggedIn, function(req, res) {
   // HouseContract.getContracts(1, function(e, r ){
   //   if(e) console.log(e);
   //   else {
   //    console.log(r);
   //    console.log(r[0]);
   //    console.log(r[1]);
   //    console.log(r[2]);
   //    console.log(r[3]);
   //    console.log(r[4]);
   //    console.log(r[5]);
   //    console.log(r[6]);
   //  }
   // })
  res.render('contract');
});

router.post('/contract', function(req,res,next){          
  HouseContract.addContract.sendTransaction(req.body.LessorName, req.body.HirerName, req.body.BrokerName,
                                            req.body.Address, req.body.ContractDate, req.body.ExpireDate, req.body.Payment, {
                                              to : '0x8df1245199938778e2ef2810fc0008f7bdf55b22',
                                              from : web3.eth.accounts[0],
                                              gas: 3000000
                                            }, function(error, transactionHash){
    if(!error){
      console.log('no error');
    }else{
      console.log(error);
    }
  });
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.session.user_uid)
    return next();
  res.redirect('/auth/signin');
}

module.exports = router;