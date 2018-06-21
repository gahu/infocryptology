var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contract');
});


router.post('/',function(req,res,next){
  res.render('contract', {
    LessorName : req.body.LessorName,
    HirerName:req.body.HirerName,
    BrokerName:req.body.BrokerName,
    Payment:req.body.Payment,
    DownPayment:req.body.DownPayment,
    leaseFee: req.body.leaseFee});
});

module.exports = router;
