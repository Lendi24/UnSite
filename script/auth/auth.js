'use strict';
class auth {
    userWarnTexID;
    paswWarnTexID;
    primButtonID;
    secButtonID;
    agreeBoxID;
    hasValidUsrname;
    hasValidPasswd;
    hasCheckedBox;
    //text to hide or unhide if feild is correct
    static userWarnTexID = "usr-warn-name";
    static paswWarnTexID = "usr-warn-psw";
    //input 
    static primButtonID = "button-prim";
    static secButtonID = "button-sec";
    static agreeBoxID = "auth-agree-box";
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
    if (usrValidPasswd) {
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
        auth.hasValidUsrname = false;
        auth.hasValidPasswd = false;
        auth.hasCheckedBox = false;
        window.location.href = "/#/verification";
    }
}
