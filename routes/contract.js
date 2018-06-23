var express = require('express');
var router = express.Router();

router.use(express.static("public"));
router.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.jade");
})

/*
var Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = web3.eth.contract(
  [
    {"constant":false,
    "inputs":[{"name":"fileHash","type":"string"}],
    "name":"get",
    "outputs":[{"name":"timestamp","type":"uint256"},{"name":"owner","type":"string"}],
    "payable":false,"type":"function"
    },
    {"constant":false,
    "inputs":[{"name":"owner","type":"string"},{"name":"fileHash","type":"string"}],
    "name":"set",
    "outputs":[],
    "payable":false,"type":"function"
    },
    {"anonymous":false,
    "inputs":[{"indexed":false,"name":"status","type":"bool"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"owner","type":"string"},{"indexed":false,"name":"fileHash","type":"string"}],
    "name":"logFileAddedStatus","type":"event"
  }]);

var contractaddress = abi.at("0x57da6aee3eb32c7c9192d52e374f05a12d449ff0");
*/
router.get('/submit', function(req, res, next) {
  var fileHash = req.query.hash;
    var owner = req.query.owner;
    contractaddress.set.sendTransaction(owner, fileHash, {
        from: web3.eth.accounts[0],
    }, function(error, transactionHash){
        if (!error)
        {
            res.send(transactionHash);
        }
        else
        {
            res.send("Error");
        }
    })
});


router.post('/contract', function(req,res,next){
  res.render('contract', {
    LessorName : req.body.LessorName,
    HirerName:req.body.HirerName,
    BrokerName:req.body.BrokerName,
    Payment:req.body.Payment,
    DownPayment:req.body.DownPayment,
    leaseFee: req.body.leaseFee});
});

module.exports = router;
