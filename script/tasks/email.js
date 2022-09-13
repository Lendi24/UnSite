// document.getElementById('randomnumber').innerHTML
let code;

function randomDigit() {
    return Math.floor(Math.random() * Math.floor(2));
  }
  
  function generateRandomBinary(binaryLength) {
    let binary = "";
    for(let i = 0; i < binaryLength; ++i) {
      binary += randomDigit();
    }
    return binary;
  }

function generateCode(value) {
    code = generateRandomBinary(value);
    //console.log(x);
    //console.log(parseInt(x, 2))
    //document.getElementById('randomnumber').innerHTML = code;
    window.location='mailto:?subject=Verification-Code&body=' + code;
}


function verifyme() 
{
    if (document.getElementById("gettext").value == parseInt(code, 2)) {
        loadTask(++taskNr);
    }

}