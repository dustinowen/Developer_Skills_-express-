module.exports = {
    index,
    show
}

const Dev = require('../models/dev');

function index(req, res) {
    res.render('devs/index',{
        dustins: Dev.getAll(),
        title: 'Developer Skills TEST TEST'
    })
}

function show(req, res) {
    res.render('devs/show', {
        skill: Dev.getOne(req.params.id),
    })
}

