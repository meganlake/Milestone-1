function wrongAnswer () {
    let button = document.querySelector('button');
    button.classList.add("wrong-answer");
}

document.querySelector("#btn1-1").addEventListener("click", wrongAnswer)
document.querySelector("#btn1-2").addEventListener("click", wrongAnswer)