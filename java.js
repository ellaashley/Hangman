var easyColors = ["pink", "yellow", "green", "blue", "red", "orange", "purple", "violet", "indigo", "gold", "silver", "bronze"];
var mediumColors = ["turquoise", "navy", "thistle", "maroon", "aquamarine", "lavender", "gray", "mint"];
var hardColors = ["vermillion", "sarcoline", "coquelicot", "smaragdine", "mikado", "glaucous", "wenge", "fulvous", "xanadu", "falu", ""];

var easySports = ["soccer", "baseball", "basketball", "football", "tennis", "hockey", "swimming"];
var mediumSports = ["waterpolo", "rugby", "cricket", "crochet", "polo", "mountainbiking", "kayaking", "crosscountry", "rockclimbing"];
var hardSports = ["bobsleigh", "kegthrowing", "wifecarrying", "chessboxing", "ferretlegging", "extremeironing", "quidditch"];

var easyFruits = ["apple", "strawberry", "mango", "banana", "blueberry", "blackberry", "orange", "grape"];
var mediumFruits = ["pineapple", "nectarine", "tangerine", "plum", "passionfruit", "watermelon", "starfruit"];
var hardFruits = ["durian", "pitaya", "guava", "cantaloupe", "jackfruit"];

var word = "";
var lettersOfWord = [];
var guesses = 6;
var guessedLetters = [];

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png"];

function startGame(){
    var level = document.getElementById("level").value;
    var category = document.getElementById("category").value;
    if(level == 0 && category == 0){
        word = easyColors[Math.floor(Math.random() * easyColors.length)];
    }
    if(level == 1 && category == 0){
        word = mediumColors[Math.floor(Math.random() * mediumColors.length)];
    }
    if(level == 2 && category == 0){
        word = hardColors[Math.floor(Math.random() * hardColors.length)];
    }
    if(level == 0 && category == 1){
        word = easySports[Math.floor(Math.random() * easySports.length)];
    }
    if(level == 1 && category == 1){
        word = mediumSports[Math.floor(Math.random() * mediumSports.length)];
    }
    if(level == 2 && category == 1){
        word = hardSports[Math.floor(Math.random() * hardSports.length)];
    }
    if(level == 0 && category == 2){
        word = easyFruits[Math.floor(Math.random() * easyFruits.length)];
    }
    if(level == 1 && category == 2){
        word = mediumFruits[Math.floor(Math.random() * mediumFruits.length)];
    }
    if(level == 2 && category == 2){
        word = hardFruits[Math.floor(Math.random() * hardFruits.length)];
    }
    var theWord = word;
    var a = document.getElementsByClassName("ltrbtn");
    for(var i=0; i<a.length; i++){
        a[i].disabled = false;
    }
    lettersOfWord = word.split("");
    guesses = 6;
    guessedLetters = [];
    document.getElementById("left").innerHTML = guesses;
    document.getElementById("guesses").innerHTML = "Guesses left:";
    document.getElementById("image").src = "";
    printWord();
}

function printWord(){
    var answer = "";
    for(var i=0; i<word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            answer += word[i];
        }else{
            answer += "_ ";
        }
    }
    document.getElementById("word").innerHTML = answer;
    if(answer == word){
        win();
    }
    if(answer != word && guesses<1){
        lose();
    }
}

function guessLetter(button){
    button.disabled = "true";
    var letter = button.value;
    guessedLetters.push(letter);
    if(lettersOfWord.indexOf(letter) == -1){
        guesses = guesses -1;
    }
    document.getElementById("left").innerHTML = guesses;
    img(guesses);
    printWord();
}

function addButtons(){
    var button;
    var div = document.getElementById("buttoncontainer");
    for(var i=0; i<alphabet.length; i++){
        button = document.createElement("button");
        button.setAttribute("class", "ltrbtn");
        button.setAttribute("value", alphabet[i]);
        button.setAttribute("onclick", "guessLetter(this)");
        button.innerHTML = alphabet[i];
        div.appendChild(button);
    }
}

function win(){
    var congrats = "Congratulations!";
    var youWin = "You win.";
    document.getElementById("guesses").innerHTML = congrats;
    document.getElementById("left").innerHTML = youWin;
    disableButtons();
}

function lose(){
    var out = "Uh oh! You are out of guesses.";
    var youLose = "You lose.";
    document.getElementById("guesses").innerHTML = out;
    document.getElementById("left").innerHTML = youLose;
    disableButtons();
    showWord();
}

function showWord(){
    document.getElementById("word").innerHTML = word;
}

function disableButtons(){
    var a = document.getElementsByClassName("ltrbtn");
    for(var i=0; i<a.length; i++){
        a[i].disabled = true;
    }
}

function img(guesses){
    if(guesses ==5){
        document.getElementById("image").src = images[0];
    }
    if(guesses ==4){
        document.getElementById("image").src = images[1];
    }
    if(guesses == 3){
        document.getElementById("image").src = images[2];
    }
    if(guesses == 2){
        document.getElementById("image").src = images[3];
    }
    if(guesses ==1){
        document.getElementById("image").src = images[4];
    }
    if(guesses ==0){
        document.getElementById("image").src = images[5];
    }
}