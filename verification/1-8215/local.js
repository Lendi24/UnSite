var box, button, done;

window.onload = function() { 
    done = false;
    document.body.style.backgroundColor = "gray";
    box = document.getElementById("box");
    button = box.getElementsByClassName("is-checkbox")[0];
    CenterElm(box);

    box.onmouseover = function() {
        if (!done) {
            setTimeout(() => {  
                RandomPos(box);
            }, 50);
    
        }
    }

    box.onclick = function() {
        done = true;
        box.onclick = function(){}
        box.style.cursor = "unset";
        button.classList = "is-dual-ring";
        setTimeout(() => {  
            button.classList ="is-done"; 
            //document.body.style.backgroundColor = "white";                
        }, 1420);
    }
}

window.onresize = function() {
    CenterElm(box);
}

function CenterElm(elm) {
    elm.style.left = ((window.innerWidth/2)-(elm.clientWidth/2));
    elm.style.bottom = ((window.innerHeight/2)-(elm.clientHeight/2));
}

function RandomPos(elm) {
    
    elm.style.left   = Math.floor(Math.random() * ((window.innerWidth)-(elm.clientWidth+20)));
    elm.style.bottom = Math.floor(Math.random() * ((window.innerHeight)-(elm.clientHeight)));
    /*
    elm.style.left = ((window.innerWidth)-(elm.clientWidth+20));
    elm.style.bottom = ((window.innerHeight)-(elm.clientHeight));
/*
    elm.style.left = (0);
    elm.style.bottom = (0);*/
}