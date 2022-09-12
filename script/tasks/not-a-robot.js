class TaskNotARobot extends TaskObj {
    taskLogic() {
        console.log("yo");
        var box, button, done, hint;
        var triesBeforeHint = 10;
        const obj = this;
        done = false;
        box = document.getElementById("box");
        button = box.getElementsByClassName("is-checkbox")[0];
        hint = document.getElementById("hint-text");
        console.log(this);
        obj.CenterElm(box);
        box.onmouseenter = function () {
            if (!done) {
                if (triesBeforeHint > 0) {
                    triesBeforeHint--;
                }
                else if (triesBeforeHint == 0) {
                    hint.innerHTML = "<br>Psst!<br>Have you tried resizing the window?";
                }
                obj.RandomPos(box);
                setTimeout(() => { }, 10);
            }
        };
        box.onclick = function () {
            done = true;
            box.onclick = function () { };
            box.style.cursor = "unset";
            button.classList = "is-dual-ring";
            setTimeout(() => {
                button.classList = "is-done";
                //document.body.style.backgroundColor = "white";
            }, 1420);
        };
        window.onresize = function () {
            obj.CenterElm(box);
        };
    }
    CenterElm(elm) {
        elm.style.left = (window.innerWidth / 2 - elm.clientWidth / 2).toString() + "px";
        elm.style.bottom = (window.innerHeight / 2 - elm.clientHeight / 2).toString() + "px";
    }
    RandomPos(elm) {
        elm.style.left = Math.floor(Math.random() * (window.innerWidth - elm.clientWidth)).toString() + "px";
        elm.style.bottom = Math.floor(Math.random() * (window.innerHeight - elm.clientHeight)).toString() + "px";
    }
}
