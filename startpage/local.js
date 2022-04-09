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

    //text to hide or unhide if feild is correct
    userWarnText = document.getElementById("usr-warn-name");
    paswWarnText = document.getElementById("usr-warn-psw");
    
    //input to hook
    primButton = document.getElementById("button-prim");
    secButton = document.getElementById("button-sec");

    agreeBox = document.getElementById("auth-agree-box");
    usrnme = document.getElementById("usr-name");
    passwd = document.getElementById("paswd");   

    //bools to continue
    usrAcceptedEula = false;
    usrValidName = false;
    usrValidPasswd = false;

    //init stuff
//    primButton.disabled = true;
};

function CheckIfValid() {
    primButton.disabled = !(usrAcceptedEula && usrValidName && usrValidPasswd);
}

function ChangedCheck(checked) {
    //primButton.disabled = !checked;
    usrAcceptedEula = checked;
    CheckIfValid();
}

function ChangeUname(val) {
    usrValidName = val.replace(/\s/g, "") != ""
    if (usrValidName) {
        userWarnText.style.display = "none";
        usrnme.classList.add("is-success");
        usrnme.classList.remove("is-danger");
    }

    else {
        userWarnText.style.display = "block";
        usrnme.classList.remove("is-success");
        usrnme.classList.add("is-danger");
    }

    CheckIfValid();
}

function ChangePasswd(val) {
    usrValidPasswd = /\d/.test(val) && /[a-zA-Z]/g.test(val);
    if (usrValidPasswd){
        paswWarnText.style.display = "none";
        passwd.classList.add("is-success");
        passwd.classList.remove("is-danger");
    }

    else {
        paswWarnText.style.display = "block";
        passwd.classList.remove("is-success");
        passwd.classList.add("is-danger");
    }

    CheckIfValid();
}

function ResetForm() {
    //U-name
    usrValidName = false;
    userWarnText.style.display = "none";
    usrnme.classList.remove("is-success");
    usrnme.classList.remove("is-danger");
    usrnme.value = "";

    //P-word
    usrValidPasswd = false;
    paswWarnText.style.display = "none";
    passwd.classList.remove("is-success");
    passwd.classList.remove("is-danger");
    passwd.value = "";

    //Updates Button
    CheckIfValid();
}

function EnterAuthMode(mode) {
    switch (mode) {
        case 'login':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Login"; //Cheep solution! This var is also used to keep
            agreeBox.checked = true;   //track of 'auth mode'. If you want to add auth mode,
            agreeBox.hidden = true;    //(or edit the name), make sure to also edit it
            agreeText.hidden = true;   //at the 'submit' case
            primButton.disabled = false;
            usrAcceptedEula = true;
            break;

        case 'signu':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Signup";
            agreeBox.checked = false;
            agreeBox.hidden = false;
            agreeText.hidden = false;
            primButton.disabled = true;
            usrAcceptedEula = false;
            break;

        case 'submit':
            switch (title.innerText) {
                case "Signup":
                    window.location.href = '/verification/1-8215'
                    break;

                case "Login":
                    alert("Invalid username or password");
                    break;
    
                default:
                    break;
            }
            break;
    
        default:
            elem.classList.remove("unsite-anim-show");
            break; 
    }

    ResetForm();
}
