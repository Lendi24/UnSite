'use strict';

class auth {
    userWarnTexID: string;
    paswWarnTexID: string;
    primButtonID: string;
    secButtonID: string;
    agreeBoxID: string;
    
    //text to hide or unhide if feild is correct
    static userWarnTexID =   "usr-warn-name";
    static paswWarnTexID =   "usr-warn-psw";

    //input 
    static primButtonID  =   "button-prim";
    static secButtonID   =   "button-sec";
    static agreeBoxID    =   "auth-agree-box";

    //vars
    static hasValidUsrname = false;
    static hasValidPasswd = false;
    static hasCheckedBox = false;
}
/*
}*/

//document.getElementById(auth.titleID) 

function onUnameChange(val, obj) {
    let usrValidName = val.replace(/\s/g, "") != "";
    if (usrValidName) {
        document.getElementById(auth.userWarnTexID).style.display = "none";
        obj.classList.add("is-success");
        obj.classList.remove("is-danger");
        auth.hasValidUsrname = true;
    }

    else {
        document.getElementById(auth.userWarnTexID).style.display = "block";
        obj.classList.remove("is-success");
        obj.classList.add("is-danger");
        auth.hasValidUsrname = false;
    }
 
    checkIfValid();
}

function onPasswdChange(val, obj) {
    let usrValidPasswd = /\d/.test(val) && /[a-zA-Z]/g.test(val);
    if (usrValidPasswd){
        document.getElementById(auth.paswWarnTexID).style.display = "none";
        obj.classList.add("is-success");
        obj.classList.remove("is-danger");
        auth.hasValidPasswd = true;
    }

    else {
        document.getElementById(auth.paswWarnTexID).style.display = "block";
        obj.classList.remove("is-success");
        obj.classList.add("is-danger");
        auth.hasValidPasswd = false;
    }

    checkIfValid();
}

function onAgreeboxChange(val) {
    auth.hasCheckedBox = val;
    checkIfValid();
}

function checkIfValid() {
    document.getElementById(auth.primButtonID).disabled = !(auth.hasValidUsrname && auth.hasValidPasswd && auth.hasCheckedBox);
}

function sendToValidate() {
    if (auth.hasValidUsrname && auth.hasValidPasswd && auth.hasCheckedBox) {
        window.location.href = "/#/verification";
    }
}

/*
function EnterAuthMode(mode) {
    switch (mode) {
        case 'login':
            document.getElementById(auth.agreeBoxID).checked = true;   //track of 'auth mode'. If you want to add auth mode,
            document.getElementById(auth.agreeBoxID).hidden = true;    //(or edit the name), make sure to also edit it
            document.getElementById(auth.primButtonID).disabled = false;
            break;

        case 'signu':
            document.getElementById(auth.agreeBoxID).checked = false;
            document.getElementById(auth.agreeBoxID).hidden = false;
            document.getElementById(auth.primButtonID).disabled = true;
            break;

        case 'submit':
            switch (document.getElementById(auth.titleID).innerText) {
                case "Signup":
                    window.location.href = '/#/verification'
                    break;

                case "Login":
                    alert("Invalid username or password");
                    break;
    
                default:
                    break;
            }
            break;
    
        default:
            document.getElementById(auth.elemID).classList.remove("unsite-anim-show");
            break; 
    }

}

/*
//init stuff
//alert("troll");

function CheckIfValid() {

    primButton.disabled = !(usrAcceptedEula && usrValidName && usrValidPasswd);
}

function ChangedCheck(checked) {
    //primButton.disabled = !checked;
    usrAcceptedEula = checked;
    CheckIfValid();
}

function ChangeUname(val, obj) {
    usrValidName = val.replace(/\s/g, "") != "";
    if (usrValidName) {
        userWarnText.style.display = "none";
        obj.classList.add("is-success");
        obj.classList.remove("is-danger");
    }

    else {
        userWarnText.style.display = "block";
        obj.classList.remove("is-success");
        obj.classList.add("is-danger");
    }
 
    CheckIfValid();
}

function ChangePasswd(val, obj) {
    usrValidPasswd = /\d/.test(val) && /[a-zA-Z]/g.test(val);
    if (usrValidPasswd){
        paswWarnText.style.display = "none";
        obj.classList.add("is-success");
        obj.classList.remove("is-danger");
    }

    else {
        paswWarnText.style.display = "block";
        obj.classList.remove("is-success");
        obj.classList.add("is-danger");
    }

    CheckIfValid();
}

function ResetForm() {
    let usrnme = document.getElementById("usr-name");
    let passwd = document.getElementById("paswd");   

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
            title.innerText = "Login"; //Cheep solution! This let is also used to keep
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
                    window.location.href = '/#/verification'
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
}*/
