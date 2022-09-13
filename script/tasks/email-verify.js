class TaskEmailVerify extends TaskObj {
    name;
    userInput;
    verificationCodeBinary;
    verificationCodeDecimal;
    taskLogic() {
        const obj = this;
        obj.verificationCodeBinary = obj.generateRandomBinary(12);
        obj.verificationCodeDecimal = parseInt(obj.verificationCodeBinary, 2);
        var verifyCodeBtn = document.getElementById("verify-code-btn");
        var getCodeBtn = document.getElementById("get-code-btn");
        var userInputF = document.getElementById("user-input");
        verifyCodeBtn.onclick = function () {
            if (parseInt(obj.userInput) == obj.verificationCodeDecimal) {
                document.getElementById("next-task-button").click();
            }
        };
        getCodeBtn.onclick = function () {
            alert("New e-mail!\nVerification code: " + obj.verificationCodeBinary +
                "\nWhat? E-mail servers are expensive. This works just as good!\n" +
                "Oh, btw. You might need to do something to that code before you enter it! >:)");
        };
        userInputF.oninput = function () {
            obj.userInput = userInputF.value;
        };
    }
    generateRandomBinary(binaryLength) {
        let binary = "";
        for (let i = 0; i < binaryLength; ++i) {
            binary += Math.floor(Math.random() * Math.floor(2));
        }
        return binary;
    }
}
