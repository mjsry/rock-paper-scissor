let list = ['rock', 'scissor', 'paper']
let user_score = 0
let computer_score = 0
let computer_index_choice
let computer_choice
let timeoutId
let isAnimating = false
const update = (x) => {
    if (x == 'u') {
        user_score++
        document.getElementById('user_score').innerHTML = user_score.toString()
        document.getElementById('container').style.borderColor = '#00C900FF'
    } else if (x == 'c') {
        computer_score++
        document.getElementById('computer_score').innerHTML = computer_score.toString()
        document.getElementById('container').style.borderColor = 'red'
    }
}

const resetPositions = (user_choice, comp_choice) => {
    document.getElementById(user_choice).style.transform = user_choice === 'paper' ? 'translateY(102px)' : user_choice === 'rock' ? 'translateY(40px)' : 'translateY(60px)'
    document.getElementById(comp_choice + '_r').style.transform = comp_choice === 'paper' ? 'translateY(-102px)' : comp_choice === 'rock' ? 'translateY(-40px)' : 'translateY(-60px)'
    document.getElementById('container').style.borderColor = 'gray'
    isAnimating = false
}

const main = (rock_scissor_paper) => {
    if (user_score < 5 && computer_score < 5 && !isAnimating) {
        isAnimating = true

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        computer_index_choice = Math.floor(Math.random() * list.length)
        computer_choice = list[computer_index_choice]

        document.getElementById(rock_scissor_paper).style.transform = 'translateY(0px)'
        document.getElementById(computer_choice + '_r').style.transform = 'translateY(0px)'

        if (rock_scissor_paper == 'rock') {
            if (computer_choice == 'rock') {document.getElementById('container').style.borderColor = '#E0E00EFF'}
            if (computer_choice == 'paper') {update('c')}
            if (computer_choice == 'scissor') {update('u')}
        }
        if (rock_scissor_paper == 'paper') {
            if (computer_choice == 'paper') {document.getElementById('container').style.borderColor = '#E0E00EFF'}
            if (computer_choice == 'rock') {update('u')}
            if (computer_choice == 'scissor') {update('c')}
        }
        if (rock_scissor_paper == 'scissor') {
            if (computer_choice == 'scissor') {document.getElementById('container').style.borderColor = '#E0E00EFF'}
            if (computer_choice == 'rock') {update('c')}
            if (computer_choice == 'paper') {update('u')}
        }

        timeoutId = setTimeout(() => {
            resetPositions(rock_scissor_paper, computer_choice)
        }, 1000)
    }
}