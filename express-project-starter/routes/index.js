var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Ask Meeple',
    // authenticated: res.locals.authenticated,
    // user: res.locals.user
  });
});

module.exports = router;
