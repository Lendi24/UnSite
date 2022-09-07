const tasks = {
    0 :                   { title: "Verification",   html: "/html/tasks/not-a-robot.html",      func: null },
    1 :                   { title: "Verification",   html: "/html/tasks/not-a-robot.html",      func: null },
    2 :                   { title: "Verification",   html: "/html/tasks/temp1.html",            func: null },
    3 :                   { title: "Verification",   html: "/html/tasks/temp2.html",            func: null },
    4 :                   { title: "Verification",   html: "/html/tasks/temp3.html",            func: null },
    5 :                   { title: "Verification",   html: "/html/tasks/temp4.html",            func: null },
    6 :                   { title: "Verification",   html: "/html/tasks/temp5.html",            func: null },
    7 :                   { title: "Verification",   html: "/html/tasks/temp6.html",            func: null },
    8 :                   { title: "Verification",   html: "/html/tasks/temp7.html",            func: null },
    9 :                   { title: "Verification",   html: "/html/tasks/temp8.html",            func: null },
    10:                   { title: "Verification",   html: "/html/tasks/temp9.html",            func: null },
};

const order = shuffle(Object.keys(tasks))
let nextTaskButton:HTMLElement, currentTaskNr:number;

loadTask(0);
function loadTask(taskNr) {
    requestPage(tasks[order[taskNr]].html).then( function(value) {
        applyPage(value)
        nextTaskButton = document.getElementById("next-task-button");

        nextTaskButton.onclick = function(){
            loadTask(++taskNr);
        };     
    });
}

/*
requestPage(tasks[order[0]].html).then(function(value) {
    applyPage(value);
    loadTask(0);
});
*/


function shuffle(array) {
    var m = array.length, t, i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

