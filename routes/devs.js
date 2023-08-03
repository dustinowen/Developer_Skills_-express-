var express = require('express');
var router = express.Router();

var devsCtrl = require('../controllers/devs')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// REMINDER -> all actual paths start with "/devs"


// GET devs
router.get('/', devsCtrl.index);

// router.get('/:id', devsCtrl.getOne)


module.exports = router;
