'use strict';
class auth {
    elemID; /*
    titleID: string;
    agreeTextID: string;
    userWarnTexID: string;
    paswWarnTexID: string;
    primButtonID: string;
    secButtonID: string;
    agreeBoxID: string;*/
    static elemID = "auth-popup";
    static titleID = "auth-title";
    static agreeTextID = "auth-agree-text";
    //text to hide or unhide if feild is correct
    static userWarnTexID = "usr-warn-name";
    static paswWarnTexID = "usr-warn-psw";
    //input 
    static primButtonID = "button-prim";
    static secButtonID = "button-sec";
    static agreeBoxID = "auth-agree-box";
}
/*
}*/
//document.getElementById(auth.titleID) 
function ChangeUname(value, elem) {
}
function ChangePasswd(value, elem) {
}
function EnterAuthMode(mode) {
    switch (mode) {
        case 'login':
            document.getElementById(auth.elemID).classList.add("unsite-anim-show"); /*
            document.getElementById(auth.titleID).innerText = "Login"; //Cheep solution! This let is also used to keep
            document.getElementById(auth.agreeBoxID).checked = true;   //track of 'auth mode'. If you want to add auth mode,
            document.getElementById(auth.agreeBoxID).hidden = true;    //(or edit the name), make sure to also edit it
            document.getElementById(auth.agreeTextID).hidden = true;   //at the 'submit' case
            document.getElementById(auth.primButtonID).disabled = false;*/
            break;
        case 'signu':
            document.getElementById(auth.elemID).classList.add("unsite-anim-show"); /*
            document.getElementById(auth.titleID).innerText = "Signup";
            document.getElementById(auth.agreeBoxID).checked = false;
            document.getElementById(auth.agreeBoxID).hidden = false;
            document.getElementById(auth.agreeTextID).hidden = false;
            document.getElementById(auth.primButtonID).disabled = true;*/
            break;
        case 'submit':
            switch (document.getElementById(auth.titleID).innerText) {
                case "Signup":
                    window.location.href = '/#/verification';
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
    //ResetForm();
}
