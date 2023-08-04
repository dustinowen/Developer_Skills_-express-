module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
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

function create(skill) {
    console.log(skill)
    dustins.push(skill)
}

function deleteOne(id) {
    const idx = dustins.findIndex(skill => skill.skill === skill)
    dustins.splice(idx, 1);
}