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

    static usrnmFeild:HTMLInputElement;
    static paswdFeild:HTMLInputElement;
    static agreeBoxEl:HTMLInputElement;
    
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
    auth.usrnmFeild = obj;
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
    auth.paswdFeild = obj;
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

function onAgreeboxChange(val, obj) {
    auth.agreeBoxEl = obj;
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
        let users = getLogins();

        switch (val) {
            case "signup":
                if (users[auth.currentUsername]) {
                    alert("A user with that name already exists!")
                }

                else if (auth.currentUsername.toLowerCase() == "unsite") {
                    alert("Haha, you are so funny. Choose something else.")
                }

                else if (auth.currentUsername.toLowerCase() == "steve") {
                    alert("You are not Steve, and will never, be as cool as Steve. You are clearly not steve!")
                }

                else if (auth.currentUsername.toLowerCase() == "admin") {
                    alert("Hello Admin! Go to the back-end and create an account like a real admin. I will get you fired :>")
                }
                
                else {
                    window.location.href = "/#/verification";
                    return;
                } 
                break;

            case "login":
                if (users[auth.currentUsername]) {
                    if (users[auth.currentUsername].passwd == auth.currentPassword) {

                        ignoreNextCall = 1;
                        window.location.href = "/#/mypage";

                        requestPage(users[auth.currentUsername].html).then( function(value) {
                            applyPage(value)

                        });

                        return;
                    }    
                }

                alert(
                    "The username and/or password was not valid.\n"+
                    "How come you managed to fail such a simple task?\n"
                    +"Please do not try again!");
                break;

            default:
                console.log('Value was not valid!')
                break;
        }

        auth.usrnmFeild.value = "";
        auth.paswdFeild.value = "";                
        auth.agreeBoxEl.checked = false;

        onUnameChange("", auth.usrnmFeild);
        onPasswdChange("", auth.paswdFeild);

        checkIfValid();

    }
}

function clrLogins() {
    localStorage.users = "null" || localStorage.users == null;
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



