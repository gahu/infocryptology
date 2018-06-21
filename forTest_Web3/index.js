(function() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var contract = web3.eth.contract([
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
]).at("0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c");

    // var name = "이순신";
    // var salary = contract.get(name);

  //  console.log(name,salary.toString(10));
})();
