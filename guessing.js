let number = Math.floor(Math.random() * 100) + 1;

let guess = 0;

const button = document.querySelector('.submit');
const playagain = document.querySelector('.play');
const wrong = document.querySelector('.wrong');
const answer = document.querySelector('.guess');
const res = document.querySelector('.result');
const chance = document.querySelector('.chance');
const guesses = document.querySelector('.guessed');
const submit = document.querySelector('.submit');
const low = document.querySelector('.low');
const high = document.querySelector('.high');

function newgame() {
    const play = document.querySelector('.play');

    play.style.display = "block";
    answer.value = null;
    submit.disabled = true;
    answer.disabled = true;
}

playagain.addEventListener('click', () => {

    submit.disabled = false;
    answer.disabled = false;

    wrong.style.display = "none";
    res.style.display = "none";
    chance.style.display = "none";
    high.style.display = "none";
    low.style.display = "none";
    guesses.textContent = "Numbers Guessed : ";
    guess = 0;
    number = Math.floor(Math.random() * 100) + 1;
});

button.addEventListener('click', () => {
    const num = answer.value;
    if(answer.value == '')
        return;
    if(guesses.textContent !== "Numbers Guessed : ")
        guesses.textContent = guesses.textContent + ", ";
    guesses.textContent = guesses.textContent + num;

    if(num == number)
    {   
        wrong.style.display = "none";
        res.style.display = "block";
        high.style.display = "none";
        low.style.display = "none";
        newgame();
    }
    else if(num > number)
    {
        high.style.display = "block";
        low.style.display = "none";
        wrong.style.display = "block";
    }
    else {
        high.style.display = "none";
        low.style.display = "block";
        wrong.style.display = "block";
    }
    guess += 1;
    answer.value = null;
    if(guess === 10) {
        chance.style.display = "block";
        wrong.style.display = "none";
        newgame();
    }
});