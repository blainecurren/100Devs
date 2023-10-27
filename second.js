if (!localStorage.getItem('botscore')) {
    localStorage.setItem('botscore', 0)
}

document.querySelector('button').addEventListener('click', anothaOne)

function anothaOne() {
    let botScore = Number(localStorage.getiTem('botScore'))
    botScore = botScore + 1
    localStorage.setItem('botScore', botScore)
}
