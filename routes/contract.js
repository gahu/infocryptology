var express = require('express');
var router = express.Router();

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getContract_etc",
		"outputs": [
			{
				"name": "",
				"type": "uint16"
			},
			{
				"name": "",
				"type": "uint16"
			},
			{
				"name": "",
				"type": "uint16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCreator",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContract_date",
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_Address",
				"type": "string"
			},
			{
				"name": "_ContractDate",
				"type": "string"
			},
			{
				"name": "_ExpireDate",
				"type": "string"
			}
		],
		"name": "insertContract_date",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_Payment",
				"type": "uint16"
			},
			{
				"name": "_DownPayment",
				"type": "uint16"
			},
			{
				"name": "_leaseFee",
				"type": "uint16"
			}
		],
		"name": "insertContract_etc",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContract_name",
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
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_LessorName",
				"type": "string"
			},
			{
				"name": "_HirerName",
				"type": "string"
			},
			{
				"name": "_BrokerName",
				"type": "string"
			}
		],
		"name": "insertContract_name",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

/* GET home page. */
router.get('/contract', function(req, res, next) {
  res.render('contract');
});

router.post('/contract', function(req,res,next){
	HouseContract = web3.eth.contract(abi);
	console.log('here');
  res.render('contract', {
    LessorName : 'a',
    HirerName: 'b',
    BrokerName: 'c',
    Payment: 'd',
    DownPayment: 'e',
    leaseFee: 'f'});
});

module.exports = router;
