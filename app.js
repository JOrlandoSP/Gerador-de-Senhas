
let passEl1 = document.getElementById("pass-el-1");
let passEl2 = document.getElementById("pass-el-2");
let spanEl = document.getElementById("span-el");
let dict = "";
let pass1 = "";
let pass2 = "";

let symbolCh = document.getElementById("sc")
let numberCh = document.getElementById("nc")

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";

function genDict(){
    if (symbolCh.checked === true && numberCh.checked === true){
        return (letters+numbers+symbols)
    }  else if (numberCh.checked === true){
        return (letters+numbers)
    }  else if (symbolCh.checked === true){
        return (letters+symbols)
    }  else if (symbolCh.checked === false && numberCh.checked == false){
        return letters
    }
}

function genPassWd(){
    dict = genDict()

    for (let i = 0; i < 15; i++){
        randomIndex = Math.floor(Math.random()*dict.length);
        randomCharacter = dict[randomIndex];
        pass1 += randomCharacter;
    }
    passEl1.textContent = pass1;

    for (let i = 0; i < 15; i++){
        randomIndex = Math.floor(Math.random()*dict.length);
        randomCharacter = dict[randomIndex];
        pass2 += randomCharacter;
    }
    passEl2.textContent = pass2;

    pass1 = "";
    pass2 = "";
    spanEl.textContent = "Password generated! click to copy.";

}

/* 
    NEED TO BE FIXED

    function copy11(){
    let c1 = document.getElementById("pass-el-1")
    c1.textContent();
    c1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(value)
    spanEl.textContent = "Password copied to clipboard!";
} */

function copy1() {
    var range = document.createRange();
    range.selectNode(document.getElementById("pass-el-1"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    spanEl.textContent = "Password copied to clipboard!";
}

function copy2() {
    var range = document.createRange();
    range.selectNode(document.getElementById("pass-el-2"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    spanEl.textContent = "Password copied to clipboard!";
}


