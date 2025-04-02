let list = ['rock', 'scissor', 'paper'];
let user_score = 0;
let computer_score = 0;
let computer_index_choice;
let computer_choice;
let timeoutId;
let isAnimating = false;

const update = (x) => {
    if (x == 'u') {
        user_score++;
        document.getElementById('user_score').innerHTML = user_score.toString();
        document.getElementById('container').style.borderColor = '#00C900FF';
    } else if (x == 'c') {
        computer_score++;
        document.getElementById('computer_score').innerHTML = computer_score.toString();
        document.getElementById('container').style.borderColor = 'red';
    }
};

const resetPositions = (user_choice, comp_choice) => {
    document.getElementById(user_choice).style.transform = user_choice === 'paper' ? 'translateY(102px)' : user_choice === 'rock' ? 'translateY(40px)' : 'translateY(60px)';
    document.getElementById(comp_choice + '_r').style.transform = comp_choice === 'paper' ? 'translateY(-102px)' : comp_choice === 'rock' ? 'translateY(-40px)' : 'translateY(-60px)';
    document.getElementById('container').style.borderColor = 'gray';
    if (user_score == 1) {
        document.querySelector('#win_message').classList.add('show');
        document.querySelector('#container').classList.add('blur');
    }
    if (computer_score == 1) {
        document.querySelector('#lose_message').classList.add('show');
        document.querySelector('#container').classList.add('blur');
    }
    isAnimating = false;
};

const resetGame = () => {
    console.log('Reset button clicked!'); // برای تست
    user_score = 0;
    computer_score = 0;
    document.getElementById('user_score').innerHTML = '0';
    document.getElementById('computer_score').innerHTML = '0';
    document.querySelector('#win_message').classList.remove('show');
    document.querySelector('#lose_message').classList.remove('show');
    document.querySelector('#container').classList.remove('blur');
    document.querySelector('#container').style.borderColor = 'gray';
    document.getElementById('rock').style.transform = 'translateY(40px)';
    document.getElementById('paper').style.transform = 'translateY(102px)';
    document.getElementById('scissor').style.transform = 'translateY(60px)';
    document.getElementById('rock_r').style.transform = 'translateY(-40px)';
    document.getElementById('paper_r').style.transform = 'translateY(-102px)';
    document.getElementById('scissor_r').style.transform = 'translateY(-60px)';
};

document.querySelectorAll('.reset_game').forEach(button => {
    button.addEventListener('click', resetGame);
});

const main = (rock_scissor_paper) => {
    if (user_score < 1 && computer_score < 1 && !isAnimating) {
        isAnimating = true;

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        computer_index_choice = Math.floor(Math.random() * list.length);
        computer_choice = list[computer_index_choice];

        document.getElementById(rock_scissor_paper).style.transform = 'translateY(0px)';
        document.getElementById(computer_choice + '_r').style.transform = 'translateY(0px)';

        if (rock_scissor_paper == 'rock') {
            if (computer_choice == 'rock') { document.getElementById('container').style.borderColor = '#E0E00EFF'; }
            if (computer_choice == 'paper') { update('c'); }
            if (computer_choice == 'scissor') { update('u'); }
        }
        if (rock_scissor_paper == 'paper') {
            if (computer_choice == 'paper') { document.getElementById('container').style.borderColor = '#E0E00EFF'; }
            if (computer_choice == 'rock') { update('u'); }
            if (computer_choice == 'scissor') { update('c'); }
        }
        if (rock_scissor_paper == 'scissor') {
            if (computer_choice == 'scissor') { document.getElementById('container').style.borderColor = '#E0E00EFF'; }
            if (computer_choice == 'rock') { update('c'); }
            if (computer_choice == 'paper') { update('u'); }
        }

        timeoutId = setTimeout(() => {
            resetPositions(rock_scissor_paper, computer_choice);
        }, 1000);
    }
};