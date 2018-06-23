var express = require('express');
var router = express.Router();

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
web3.eth.defaultAcounts = web3.eth.accounts[0];

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); //session secret

router.get('', function(req, res) {
  res.render('search');
});

router.post('', function(req, res){
   HouseContract.getContracts(req.body.ContractNumber, function(e, r ){
     if(e) {
      console.log(e);
         res.render('search', {LessorName : 'Wrong '});
     }
     else {
      console.log(r);
      console.log(r[0]);
      console.log(r[1]);
      console.log(r[2]);
      console.log(r[3]);
      console.log(r[4]);
      console.log(r[5]);
      console.log(r[6]);
      res.render('search', {LessorName : r[0],
                            HirerName : r[1],
                            BrokerName : r[2],
                            Address : r[3],
                            ContractDate : r[4],
                            ExpireDate : r[5],
                            Payment : r[6]});
    }
   });
});

module.exports = router;
