module.exports = {
    getAll,
    getOne
}

const dustins = [
    {skill: 'CSS', level : 'Feeling good! 😎'},
    {skill: 'Javascript', level : 'Getting there! 🤓'},
    {skill: 'Express', level : `It's a lot...but I am pushing through! 🤯`}
]

function getAll() {
    return dustins
}

function getOne(skill) {
    return dustins.find(eachSkill => eachSkill.skill === skill);
}

