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
    primButton = document.getElementById("button-prim");
    secButton = document.getElementById("button-sec");

    agreeBox = document.getElementById("auth-agree-box");
    usrnme = document.getElementById("usr-name");
    passwd = document.getElementById("paswd");   

    //init stuff
//    primButton.disabled = true;
};

function ChangedCheck(checked) {
    primButton.disabled = !checked;
}

function ChangeUname(val) {
    console.log(val);
    if (val == "<empty string>"){
        usrnme.classList.remove("is-success");
    }

    else {
        usrnme.classList.add("is-success");
    }
}

function ChangePasswd(val) {

}

function EnterAuthMode(mode) {

    switch (mode) {
        case 'login':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Login";
            agreeBox.checked = true;
            agreeBox.hidden = true;
            agreeText.hidden = true;
            primButton.disabled = false;
            break;

        case 'signu':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Signup";
            agreeBox.checked = false;
            agreeBox.hidden = false;
            agreeText.hidden = false;
            primButton.disabled = true;
            break;
    
        default:
            elem.classList.remove("unsite-anim-show");
            break; 
    }
}
