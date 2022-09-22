class PageUser extends CobraGame {
    cobra;

    initPage() {
        let obj = this;

        switch (auth.committedUsername) {
            case "Admin":
                document.getElementById("nav-settings").classList.remove("is-hidden");
                obj.taskLogic();
                break;

            case "Steve":
                obj.taskLogic();
                break;
        
            default:
                alert("wait-time");
                break;
        }
    }
}