function EnterAuthMode(mode) {
    var elem = document.getElementById("auth-popup"); 
    switch (mode) {
        case 'login':
            elem.hidden = false;
            break;

        case 'signu':
            elem.hidden = false;
            break;
        
    
        default:
            elem.hidden = true;
            break;
    }
}
