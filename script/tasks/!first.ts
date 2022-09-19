'use strict';

const tasks = {

/*
    1 : { html: "/html/tasks/adpage.html",           js: new TaskAdPage("ad-page") },
    2 : { html: "/html/tasks/email.html",            js: new TaskEmailVerify("email-verify") },
    3 : { html: "/html/tasks/Tos.html",              js: new TaskObj("terms-of-service") },
    4 : { html: "/html/tasks/not-a-robot.html",      js: new TaskNotARobot("not-a-robot") },
    5 : { html: "/html/tasks/wall-of-buttons.html",  js: new TaskWallOfButtons("wall-of-buttons") },
*/

    0 : { html: "/html/tasks/next-button.html",      js: new TaskNextButton("next-task"); },

/*
    6 : { html: "/html/tasks/temp5.html",            js: new TaskObj("null") },
    7 : { html: "/html/tasks/temp6.html",            js: new TaskObj("null") },
    8 : { html: "/html/tasks/temp7.html",            js: new TaskObj("null") },
    9 : { html: "/html/tasks/temp8.html",            js: new TaskObj("null") },
    10: { html: "/html/tasks/temp9.html",            js: new TaskObj("null") },*/
};

const order = shuffle(Object.keys(tasks))
let nextTaskButton:HTMLElement, currentTaskNr:number;

function loadTask(taskNr) {
    let currentTaskJS = (tasks[order[taskNr]].js);

    requestPage(tasks[order[taskNr]].html).then( function(value) {
        applyPage(value)
        nextTaskButton = document.getElementById("next-task-button");

        nextTaskButton.onclick = function(){
            loadTask(++taskNr);
        };     

        currentTaskJS.taskLogic();
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

