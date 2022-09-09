class TaskNotARobot extends TaskObj {
    taskLogic() {
        var box, button, done, hint;
        var triesBeforeHint = 10;
        window.onload = function () {
            done = false;
            box = document.getElementById("box");
            button = box.getElementsByClassName("is-checkbox")[0];
            hint = document.getElementById("hint-text");
            CenterElm(box);
            box.onmouseenter = function () {
                if (!done) {
                    if (triesBeforeHint > 0) {
                        triesBeforeHint--;
                    }
                    else if (triesBeforeHint == 0) {
                        hint.innerHTML = "<br>Psst!<br>Have you tried resizing the window?";
                    }
                    RandomPos(box);
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
        };
        window.onresize = function () {
            CenterElm(box);
        };
        function CenterElm(elm) {
            elm.style.left = window.innerWidth / 2 - elm.clientWidth / 2;
            elm.style.bottom = window.innerHeight / 2 - elm.clientHeight / 2;
        }
        function RandomPos(elm) {
            elm.style.left = Math.floor(Math.random() * (window.innerWidth - (elm.clientWidth + 20)));
            elm.style.bottom = Math.floor(Math.random() * (window.innerHeight - elm.clientHeight));
            /*
          elm.style.left = ((window.innerWidth)-(elm.clientWidth+20));
          elm.style.bottom = ((window.innerHeight)-(elm.clientHeight));
      /*
          elm.style.left = (0);
          elm.style.bottom = (0);*/
        }
    }
}
