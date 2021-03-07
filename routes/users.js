var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({email: "test@mail.ru"});
});

module.exports = router;
