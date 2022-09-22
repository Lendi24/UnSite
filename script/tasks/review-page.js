let values = [];

addListener(document.getElementById("IQ"),      0   , 0);
addListener(document.getElementById("brain"),   0   , 1);
addListener(document.getElementById("strenght"),0   , 2);
addListener(document.getElementById("height"),  0   , 3);
addListener(document.getElementById("smell"),   100 , 4);
addListener(document.getElementById("success"), 0   , 5);

function addListener(element, target, index) {
    values.push(false);
    element.value = Math.floor(10+Math.random() * 80);

    element.onchange = function() {
        values[index] = element.value == target;
        checkValues(values);
    }
}

function checkValues(values) {
    let isCorrect = true;
    values.forEach(value => {
        if(!value) {
            isCorrect = false;
            throw 'Did you know that foreach loops does not have a break?';
        }
    });

    if (isCorrect) {
        let nextButton = document.getElementById("next-task-button") 
        nextButton.disabled = false;
        nextButton.classList.add("is-primary");
        nextButton.classList.remove("is-danger");
    }

    else {
        let nextButton = document.getElementById("next-task-button") 
        nextButton.disabled = true;
        nextButton.classList.remove("is-primary");
        nextButton.classList.add("is-danger");

    }
}
