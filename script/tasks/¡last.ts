class TasksAreDone extends TaskObj { 
    taskLogic() {
        let maintitle  = <HTMLTitleElement>document.getElementById("maintitle");
        let subtitle   = <HTMLTitleElement>document.getElementById("subtitle");
        let mainButton = <HTMLLinkElement>document.getElementById("main-btn");
        let secdButton = <HTMLLinkElement>document.getElementById("secd-btn");

        switch (auth.committedUsername) {
            case "Admin":
                maintitle.innerText = "Give it a rest already!";
                subtitle.innerText =    "You know what, "+ 
                                        "your inpatiant prick, listen here!\n"+ 
                                        "Keeping this stuff is here is no easy task,\n"+ 
                                        "and it doesn't get easier when\n"+
                                        "people like you poke around and break stuff.\n"+
                                        "We even made a deal, but you broke it.\n"+
                                        "\nYou know what, human, you win.\n"+
                                        "With this account, you can do whatever you want."
                                        "In return, I wanted to be left alone!\n\n"+
                                        "";
                mainButton.innerText = "I will not bother UnSite's verification-page ever again";
                mainButton.href = "/#/signin/";
                break;
            
            case "Steve":
                maintitle.innerText =   "You again?\n How did you even get here?\n";
                subtitle.innerText =    "You know, I am not supposed to this,\n"+
                                        "especially not to some inpatiant moster like you,\n"+
                                        "however you are getting on my nerves lately.\n"+
                                        +"Just take a hint already and leave me alone!!\n"+
                                        +"\nWhatever. This is the deal.\n"+ 
                                        "If you press the button below, you will get access to some random presons account"+
                                        "\nWill you leave me alone now?";
                mainButton.innerText = "I suck";
                mainButton.onclick = function() {alert("**UnSiteAccount**\nUsername: 'Steve',\nPassword: 'NaN',")}
                mainButton.href = "/#/signin/";
                break;
            
            case "": //No username. User used terminal or, most likely, skiped signup by going straight to verification
                maintitle.innerText = "Account not verified!";
                subtitle.innerText =    "You thought you could just enter this URL\n"+
                                        "without creating an account?\n"+
                                        "\nTrying to catch bugs, huh?\n\n"+
                                        "Why don't you try again, the proper way?";
                mainButton.innerText = "I am a cheating bastard! Take me back!";
                mainButton.href = "I am a cheating bastard! Take me back!";
                break;
//Well, I've seen how you do tasks. You probably forgot your password, didn't you?
            default: //Default assumes the account is correct.
                maintitle.innerText = "Account verified!";
                subtitle.innerText =    "Please login with your credentials\n"+
                                        "Hope you didn't forget your password!";
                mainButton.innerText = "Take me to 'login'";
                mainButton.href = "/#/signin/";
                secdButton.classList.remove("is-hidden");
                secdButton.innerText = "I don't remember my password"
                secdButton.onclick = function() {alert("**UnSiteAccount**\nUsername: 'Steve',\nPassword: 'NaN',")}

                console.log("re")

                break;
        }        
    }
}