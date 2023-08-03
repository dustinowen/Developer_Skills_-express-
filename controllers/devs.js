module.exports = {
    index,
    show
}

const Dev = require('../models/dev');

function index(req, res) {
    res.render('devs/index',{
        dustins: Dev.getAll()

    })
}

function show(req, res) {
    res.render('devs/show', {
        skill: Dev.getOne(req.params.skill)
    })
}

