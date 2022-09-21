moveIt();
document.onresize = function(){moveIt();};

function openIt() {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    window.open(url);
    window.alert("Not that easy douchebag, find the real button")
}

let spaceW = 500;
let spaceH = 500;

function Init()
{

    spaceW = screen.height - hdnbtn.height;
    spaceH = screen.width - hdnbtn.width;
}

function moveIt()
{
    let hdnbtn = document.getElementById("next-task-button");
    

    hdnbtn.style.top  = (Math.round(Math.random() * window.innerHeight) - hdnbtn.getBoundingClientRect().height) + "px";
    hdnbtn.style.left = (Math.round(Math.random() * window.innerWidth ) - hdnbtn.getBoundingClientRect().width) + "px";
}
