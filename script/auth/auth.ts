'use strict';

class auth {
    userWarnTexID: string;
    paswWarnTexID: string;
    primButtonID: string;
    secButtonID: string;
    agreeBoxID: string;

    hasValidUsrname: boolean;
    hasValidPasswd: boolean;
    hasCheckedBox: boolean;

    currentUsername: string;
    currentPassword: string;
    
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

    static currentUsername = "";
    static currentPassword = "";
}
/*
}*/

//document.getElementById(auth.titleID) 

function onUnameChange(val, obj) {
    auth.currentUsername = val;

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
    auth.currentPassword = val;

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
    (document.getElementById(auth.primButtonID) as HTMLButtonElement).disabled = !(auth.hasValidUsrname && auth.hasValidPasswd && auth.hasCheckedBox);
}

function sendToValidate(val) {

    if (auth.hasValidUsrname && auth.hasValidPasswd && auth.hasCheckedBox) {
        auth.hasValidUsrname = false;
        auth.hasValidPasswd = false;
        auth.hasCheckedBox = false;
        
        switch (val) {
            case "signup":
                window.location.href = "/#/verification";
                break;

            case "login":
                let users = getLogins();

                if (users[auth.currentUsername] != null) {
                    if (users[auth.currentUsername].passwd == auth.currentPassword) {

                        ignoreNextCall = 1;
                        window.location.href = "/#/mypage";

                        requestPage(users[auth.currentUsername].html).then( function(value) {
                            applyPage(value)

                        });
                    }    
                }

                break;

            default:
                console.log('Value was not valid!')
                break;
        }
    }
}

function clrLogins() {
    localStorage.users = "null";
}

function getLogins() {
    if (localStorage.users == "null") {
        let users = {"testname": { passwd: "thebigyellowinthesky114",  html: "/html/auth/users/!secretusr.html"}, }
            //Keep this here! It will be our little secret :-) 
            
        localStorage.users = JSON.stringify(users);
    }         

    return JSON.parse(localStorage.users);
}

function addLogin(name, passwd, html) {
    let users = JSON.parse(localStorage.users);
    users[name] = {passwd: passwd, html: html}

    localStorage.users = JSON.stringify(users);
}



