class PageUser extends CobraGame {

    initPage() {
        let obj = this;

        switch (auth.committedUsername) {
            case "Admin":
                document.getElementById("nav-settings").classList.remove("is-hidden");
                obj.initLogic();
                break;

            case "Steve":
                obj.initLogic();
                break;
        
            default:
                alert("Your current place in the queue for playtesting the EarlyAccess-version of Cobra is: '9 978'\n"+
                "Press 'ok' to exit.");

                auth.committedUsername = "Steve";
                window.location.hash = "#/verification";
                break;
        }
    }

    scoreChanged(score) {
        document.getElementById("cobra-score").innerText = score.toString();
        if (parseInt(document.getElementById("cobra-high").innerText)<score) {
            document.getElementById("cobra-high").innerText = score.toString();
        }

        if (score >= 5 && auth.committedUsername == "Steve") {
            alert("Thank you for trying the EarlyAccess-version of Cobra(TM)")

            auth.committedUsername = "Admin";
            window.location.hash = "#/verification";
        }
    }
}