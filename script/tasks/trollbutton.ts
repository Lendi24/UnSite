// parent class
class TaskTrollButton extends TaskObj {

    taskLogic() {
        let obj = this;
        obj.setRandomPosition();
        document.onresize = function () { obj.setRandomPosition(); };
    }

    setRandomPosition() {
        let hdnbtn = document.getElementById("next-task-button");
        hdnbtn.style.top = (Math.round(Math.random() * window.innerHeight) - hdnbtn.getBoundingClientRect().height) + "px";
        hdnbtn.style.left = (Math.round(Math.random() * window.innerWidth) - hdnbtn.getBoundingClientRect().width) + "px";
    }
}