var express = require('express');
var router = express.Router();

/* Renders Accounts view */
router.get('/signin', function(req, res) {
  res.render('signin');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.get('/contract', isLoggedIn, function(req, res) {
  res.render('contract');
});

router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if (req.session)
    return next();
  res.redirect('/signin');
}

module.exports = router;
