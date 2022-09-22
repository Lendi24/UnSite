class PageUser extends CobraGame {
    cobra;

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
                alert("wait-time");
                break;
        }
    }
}