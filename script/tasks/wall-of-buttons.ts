function buttonLogic(elem, isCorrect) {
    if (isCorrect) {
        //is correct
    }
    else {
        elem.style.transition = "1s";
        elem.style.transform = "scale(2)";
        elem.style.filter = "opacity(0%)";

        //elem.classList.add("is-danger");
        
        //elem.remove();
    }
}

const div = document.getElementById("buttons");
/*
div.innerHTML += "<a class='button is-success' onclick='buttonLogic(this, false)'>Test</a>";
div.innerHTML += "<a class='button is-success' onclick='buttonLogic(this, false)'>Test3</a>";
*/
let amountOfButtons = 30;
let indexOfCorrectbutton = Math.floor(Math.random() * amountOfButtons);

for (let i = 0; i < amountOfButtons; i++) {
    
    if (i!=indexOfCorrectbutton) {
        div.innerHTML += "<a class='button m-1 is-success' onclick='buttonLogic(this, false)'>Next</a>";
    }
    
    else {
        div.innerHTML += "<a class='button m-1 is-success' onclick='buttonLogic(this, true)'>Next</a>";  
    }
}
/*
function limit() {
    let div = document.getElementById("buttons");
    if (div.screen.height <= inner.height) {
      x.style.display = "block";
    } 
  }
*/





