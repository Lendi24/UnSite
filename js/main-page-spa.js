function EnterAuthMode(mode) {
    var elem = document.getElementById("auth-popup"); 
    var title = document.getElementById("auth-title"); 

    switch (mode) {
        case 'login':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Login"
            break;

        case 'signu':
            elem.classList.add("unsite-anim-show");
            title.innerText = "Signup"
            break;
    
        default:
            elem.classList.remove("unsite-anim-show");
            break;
    }
}
