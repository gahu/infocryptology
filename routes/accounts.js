var accounts = require('../data/accountData.js');
var express = require('express');
var router = express.Router();

/* Renders Accounts view */
router.get('/:id', function(req, res) {
  var kind = req.params.id;

  res.render('accounts', {
    accounts: {
      list: accounts[kind],
      kind: accounts.accountTypeName[kind]
    }
  });
});

module.exports = router;
