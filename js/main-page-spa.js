function EnterAuthMode(mode) {
    var elem = document.getElementById("auth-popup"); 
    switch (mode) {
        case 'login':
            elem.classList.add("unsite-anim-show");
            break;

        case 'signu':
            elem.classList.add("unsite-anim-show");
            break;
        
    
        default:
            elem.classList.remove("unsite-anim-show");
            break;
    }
}
