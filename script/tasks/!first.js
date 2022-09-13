'use strict';
const tasks = {
    0: { html: "/html/tasks/Tos.html", js: new TaskObj("task-temp") },
    1: { html: "/html/tasks/not-a-robot.html", js: new TaskNotARobot("not-a-robot") },
    2: { html: "/html/tasks/temp1.html", js: new TaskTemp1("task-temp-1") },
    3: { html: "/html/tasks/temp2.html", js: new TaskObj("task-temp") },
    4: { html: "/html/tasks/temp3.html", js: new TaskObj("task-temp") },
    5: { html: "/html/tasks/temp4.html", js: new TaskObj("task-temp") },
    6: { html: "/html/tasks/temp5.html", js: new TaskObj("task-temp") },
    7: { html: "/html/tasks/temp6.html", js: new TaskObj("task-temp") },
    8: { html: "/html/tasks/temp7.html", js: new TaskObj("task-temp") },
    9: { html: "/html/tasks/temp8.html", js: new TaskObj("task-temp") },
    10: { html: "/html/tasks/temp9.html", js: new TaskObj("task-temp") },
};
const order = shuffle(Object.keys(tasks));
let nextTaskButton, currentTaskNr;
function loadTask(taskNr) {
    let currentTaskJS = (tasks[order[taskNr]].js);
    requestPage(tasks[order[taskNr]].html).then(function (value) {
        applyPage(value);
        nextTaskButton = document.getElementById("next-task-button");
        nextTaskButton.onclick = function () {
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
