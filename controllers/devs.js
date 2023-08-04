module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
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

function newSkill(req, res){
    res.render('devs/new', { title: 'New Skill'})
}

function create(req, res) { 
    Dev.create(req.body)
    res.redirect('/devs')
}

function deleteSkill (req, res) {
    Dev.deleteOne(req.params.id)
    res.redirect('/devs')
}