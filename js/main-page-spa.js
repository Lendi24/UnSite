    //Change if login or signup
    var elem;
    var title;
    var agreeText;

    //Input to hook
    var agreeBox;
    var usrnme;
    var passwd;


window.onload = function() {
    //Change if login or signup
    elem = document.getElementById("auth-popup"); 
    title = document.getElementById("auth-title"); 
    agreeText = document.getElementById("auth-agree-text");
    
    //input to hook
    submButton = document.
    agreeBox = document.getElementById("auth-agree-box");
    usrnme = document.getElementById("usr-name");
    passwd = document.getElementById("paswd");   
};

function ChangedCheck(checked) {
    console.log(checked);
    disabled 
}

function EnterAuthMode(mode) {

    switch (mode) {
        case 'login':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Login";
            agreeBox.checked = true;
            agreeBox.hidden = true;
            agreeText.hidden = true;
            break;

        case 'signu':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Signup";
            agreeBox.checked = false;
            agreeBox.hidden = false;
            agreeText.hidden = false;
            break;
    
        default:
            elem.classList.remove("unsite-anim-show");
            break;
    }
}
