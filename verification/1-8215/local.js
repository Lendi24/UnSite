var box;

window.onload = function() { 
    box = document.getElementById("box");
    CenterElm(box);

    box.onclick = function() {
        console.log("click");
    }
}

window.onresize = function() {
    CenterElm(box);
}

function CenterElm(elm) {
    elm.style.left = ((window.innerWidth/2)-(elm.clientWidth/2));
    elm.style.bottom = ((window.innerHeight/2)-(elm.clientHeight/2));
}