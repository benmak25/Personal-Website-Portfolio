function myFunction() {
    var x = document.getElementById('main-nav');
    if (x.className === "main-nav") {
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
    }
  }

const question = [
        {text: "I have solved a Rubiks Cube under 10 seconds" , correct: true, info: "In 2023, I solved a Rubik's Cube at an official competition in 8.69 seconds, making it my fastest time overall. At the time, this solve placed me top 200 in Canada."},
        {text: "My childhood sport was basketball", correct: false, info: 'I actually grew up playing Soccer, where I played on my school club. However, I presently enjoy playing basketball and recently participated in a recreational league.'},
        {text: "I have gone to school in 3 different cities", correct: true, info: 'I did Pre-School in Tokyo and continued Hong Kong, where I also did Primary School. Then I moved to to Toronto finish Primary School, complete Secondary School and University'},
];



const choices = document.getElementById('choices');
const infotext = document.getElementById('info-text');
let alertShown = false;

function displayChoices() {
    question.forEach(choice => {
        const button = document.createElement('button');
        button.innerHTML = choice.text;
        button.classList.add('btn');
        choices.appendChild(button);
        if(choice.correct) { 
            button.dataset.correct = choice.correct;
        }
        button.dataset.info = choice.info;
        button.addEventListener('click', selectChoice);
    });
}
function selectChoice(e) {
    const selectedChoice = e.target;
    const isCorrect = selectedChoice.dataset.correct == 'true';
    if(isCorrect) {
        selectedChoice.classList.add('correct')
    }
    else {
        selectedChoice.classList.add('incorrect')
        Array.from(choices.children).forEach( button => {
            if(button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
        });
        if(!alertShown) {
            alert("You found the lie! Click each prompt for more information");
            alertShown = true;
        }
        infotext.style.display = 'flex'
    }
    infotext.innerHTML = selectedChoice.dataset.info;
}

displayChoices();


