function wrongAnswer (evt) {
    evt.target.classList.toggle("wrong-answer");
}

function correctAnswer (evt) {
    evt.target.classList.toggle("correct-answer");
}

let wrongList = document.querySelectorAll(".wrong");

for (let i=0; i< wrongList.length; i++) {
    wrongList[i].addEventListener("click", wrongAnswer);
}

let correctList = document.querySelectorAll(".correct")

for (let i=0; i< correctList.length; i++) {
    correctList[i].addEventListener("click", correctAnswer);
}