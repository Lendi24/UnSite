class TasksAreDone extends TaskObj { 
    randomWordGen() {
        const words = ['Davest', 'Duudee', 'Maann', 'Youknow', 'Whooah', 'Pizza', 'Cat', 'Dog', 'Cheese', 'Cake'];
        return(words[Math.floor(Math.random()*words.length)]);
    }

    randomLetterGen() {
        const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        return(letters[Math.floor(Math.random()*letters.length)]);
    }

    taskLogic() {
        let maintitle  = <HTMLTitleElement>document.getElementById("maintitle");
        let subtitle   = <HTMLTitleElement>document.getElementById("subtitle");
        let mainButton = <HTMLLinkElement>document.getElementById("main-btn");
        let secdButton = <HTMLLinkElement>document.getElementById("secd-btn");

        switch (auth.committedUsername) {
            case "Admin":            
                let randomPassAdmin = (Math.floor(Math.random()*999)).toString();

                for (let i = 0; i < 5; i++) {
                    randomPassAdmin+=this.randomLetterGen();
                    randomPassAdmin+=this.randomLetterGen();
                }

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
                mainButton.onclick = function() {
                    alert("**UnSiteAccount**\nUsername: 'Steve',\nPassword: '"+randomPassAdmin+"',");
                    activateUser("Admin");
                    updateUser("Admin", getUser("Admin").passwd = randomPassAdmin );
                    }
                break;
            
            case "Steve":
                let randomPassSteve = this.randomWordGen()+this.randomWordGen()+Math.floor(Math.random()*999);
                maintitle.innerText =   "You again?\n How did you even get here?\n";
                subtitle.innerText =    "You know, I am not supposed to this,\n"+
                                        "especially not to some inpatiant moster like you,\n"+
                                        "however you are getting on my nerves lately.\n"+
                                        +"Just take a hint already and leave me alone!!\n"+
                                        +"\nWhatever. This is the deal.\n"+ 
                                        "If you press the button below, you will get access to some random presons account"+
                                        "\nWill you leave me alone now?";
                mainButton.innerText = "I suck";
                mainButton.href = "/#/signin/";
                mainButton.onclick = function() {
                        alert("**UnSiteAccount**\nUsername: 'Steve',\nPassword: '"+randomPassSteve+"',");
                        activateUser("Steve");
                        updateUser("Steve", getUser("Steve").passwd = randomPassSteve );
                    }
                break;
            
            case "": //No username. User used terminal or, most likely, skiped signup by going straight to verification
                maintitle.innerText = "Account not verified!";
                subtitle.innerText =    "You thought you could just enter this URL\n"+
                                        "without creating an account?\n"+
                                        "\nTrying to catch bugs, huh?\n\n"+
                                        "Why don't you try again, the proper way?";
                mainButton.innerText = "I am a cheating bastard! Take me back!";
                mainButton.href = "/#/signup";
                break;
//Well, I've seen how you do tasks. You probably forgot your password, didn't you?
            default: //Default assumes the account is correct.
                maintitle.innerText = "Account almost verified!";
                subtitle.innerText =    "Please login with your credentials\n"+
                                        "Hope you didn't forget your password!";
                mainButton.innerText = "Take me to 'login' and activate my account";
                mainButton.href = "/#/signin/";
                mainButton.onclick = function() {activateUser(auth.committedUsername)};
                secdButton.classList.remove("is-hidden");
                secdButton.innerText = "I don't remember my password"
                secdButton.onclick = function() {alert("**UnSiteAccount**\nUsername: '"+auth.committedUsername+"',\nPassword: '"+"dw"+"',")}

                console.log("re")

                break;
        }        
    }
}