'use strict';
const endingScreen = {
    html: "/html/tasks/¡last.html", js: new TasksAreDone("Verified!")
};
let tasks = [
    { html: "/html/tasks/adpage.html", js: new TaskAdPage("ad-page") },
    { html: "/html/tasks/email.html", js: new TaskEmailVerify("email-verify") },
    { html: "/html/tasks/ToS.html", js: new TaskObj("terms-of-service") },
    { html: "/html/tasks/not-a-robot.html", js: new TaskNotARobot("not-a-robot") },
    { html: "/html/tasks/wall-of-buttons.html", js: new TaskWallOfButtons("wall-of-buttons") },
    { html: "/html/tasks/next-button.html", js: new TaskNextButton("next-button-task") },
    { html: "/html/tasks/review-page.html", js: new TaskReviewPage("review-page") },
    // { html: "/html/tasks/temp6.html",           js: new TaskObj("null") },
    //{ html: "/html/tasks/trollbutton.html",     js: new TaskTrollButton("troll-button") },
    /*
    
        { html: "/html/tasks/temp6.html",            js: new TaskObj("null") },
        { html: "/html/tasks/temp7.html",            js: new TaskObj("null") },
        { html: "/html/tasks/temp8.html",            js: new TaskObj("null") },
        { html: "/html/tasks/temp9.html",            js: new TaskObj("null") },*/
];
//let taskInOrder = shuffle(tasks); 
let taskInOrder = new Array;
function updateTaskList() {
    taskInOrder = new Array;
    /*
    console.log(auth.committedUsername)
    taskInOrder = shuffle(tasks);


    if (auth.committedUsername == "Admin") {
        taskInOrder.push(endingScreen);
    } if (auth.committedUsername == "Steve") {
        taskInOrder[Math.floor(tasks.length/3)*2] = endingScreen;
    }  else {
        taskInOrder[Math.floor(tasks.length/3)] =  endingScreen
    }*/
    let endNum;
    tasks = shuffle(tasks);
    console.log(auth.committedUsername);
    if (auth.committedUsername == "Admin") {
        endNum = tasks.length;
    }
    else if (auth.committedUsername == "Steve") {
        endNum = Math.floor(tasks.length / 3) * 2;
    }
    else {
        endNum = Math.ceil(tasks.length / 3);
    }
    for (let i = 0; i < endNum; i++) {
        taskInOrder[i] = tasks[i];
    }
    taskInOrder[endNum] = endingScreen;
}
let nextTaskButton, currentTaskNr;
function loadTask(taskNr) {
    let currentTaskJS = (taskInOrder[taskNr].js);
    requestPage(taskInOrder[taskNr].html).then(function (value) {
        applyPage(value);
        nextTaskButton = document.getElementById("next-task-button");
        nextTaskButton.onclick = function () {
            loadTask(++taskNr);
        };
        currentTaskJS.initLogic();
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
