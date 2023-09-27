let counter = 0;

function addToCounter () {
    counter += 1; 
    console.log(counter);
    document.querySelector('#score').innerHTML = counter;
}

let startoverButton = document.querySelector("#startover-button");

startoverButton.addEventListener("click", ()=>{
    window.location.reload()
})

function wrongAnswer (evt) {
    evt.target.classList.add("wrong-answer");
}

function correctAnswer (evt) {
    evt.target.classList.add("correct-answer");
}

let wrongList = document.querySelectorAll(".wrong");

for (let i=0; i< wrongList.length; i++) {
    wrongList[i].addEventListener("click", wrongAnswer);
    wrongList[i].addEventListener("click", 
        () => {wrongList[i].parentElement.style.pointerEvents = "none"});
}

let correctList = document.querySelectorAll(".correct")

for (let i=0; i< correctList.length; i++) {
    correctList[i].addEventListener("click", correctAnswer);
    correctList[i].addEventListener("click", addToCounter);
    correctList[i].addEventListener("click", 
        () => {correctList[i].parentElement.style.pointerEvents = "none"});
}
