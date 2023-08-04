var express = require('express')
var router = express.Router()

var devsCtrl = require('../controllers/devs')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// REMINDER -> all actual paths start with "/devs"


// GET devs
router.get('/', devsCtrl.index)

router.get('/new', devsCtrl.new)

router.get('/:id', devsCtrl.show)

router.post('/', devsCtrl.create)

router.delete('/:id', devsCtrl.delete)

module.exports = router
