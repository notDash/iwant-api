var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json({
    userName: 'test',
    login: '1'
  });
})

module.exports = router;
