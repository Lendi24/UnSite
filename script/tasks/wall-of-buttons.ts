let amountOfButtons = 30;
let indexOfCorrectbutton = Math.floor(Math.random() * amountOfButtons);
const buttonContain = document.getElementById("buttons");

for (let i = 0; i < amountOfButtons; i++) {
    
    let button = document.createElement('a');
    button = buttonContain.appendChild(button);
    button.classList.add("button");
    button.classList.add("is-success");
    button.classList.add("m-1");
    button.innerHTML = "Click me"

    if (i!=indexOfCorrectbutton) {
        button.onclick = function(){
            button.style.transition = "1s";
            button.style.transform = "scale(2)";
            button.style.filter = "opacity(0%)";
        }
    }
    
    else {
        button.onclick = function(){
            document.getElementById("next-task-button").click();
        }
    }
}



