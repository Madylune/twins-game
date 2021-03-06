let intervalID = setInterval(changeColor, 700);

const el1 = document.querySelector('#first');
const el2 = document.querySelector('#second');

let score = 0;
const playerScore = document.querySelector('.current-score');
playerScore.innerHTML = score;


function changeColor() {
    const colors = ['pink', 'lightblue', 'lightgreen', 'sandybrown', 'violet', 'yellow'];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];

    const els = [];
    els.push(el1, el2);
    let randomElement = els[Math.floor(Math.random()*els.length)];
    randomElement.style.backgroundColor = randomColor;
}

function checkMatch() {
    if (el1.style.backgroundColor == el2.style.backgroundColor) {
        alert('GOOD GAME !');
        score++;
        playerScore.innerHTML = score;
    } else {
        alert('TRY AGAIN !');
        score--;
        playerScore.innerHTML = score;
    }
}

function stopGame() {
    if (score === -2) {
        clearInterval(intervalID);
        //Stop spinning effect
        el1.classList.remove("spinning");
        el2.classList.remove("spinning");

        //Remove match btn and put game over text
        const div = document.querySelector('.match-btn');
        div.parentNode.removeChild(div);
        const para = document.createElement("p");
        const node = document.createTextNode("GAME OVER !!");
        para.appendChild(node);
        const element = document.querySelector('.match');
        element.appendChild(para);
        document.querySelector('.play-again').style.display = 'block'
    }
    if (score === 10) {
        clearInterval(intervalID);
        //Stop spinning effect
        el1.classList.remove("spinning");
        el2.classList.remove("spinning");

        //Remove match btn and put game over text
        const div = document.querySelector('.match-btn');
        div.parentNode.removeChild(div);
        const para = document.createElement("p");
        const node = document.createTextNode("CONGRATS !!");
        para.appendChild(node);
        const element = document.querySelector('.match');
        element.appendChild(para);
        document.querySelector('.play-again').style.display = 'block'
    }
}