n = 0
while (n !== 10 ){
    n=+1
var answer = prompt("Discute avec le bot , il est grincheux en ce moment. Tape exit si tu veux le laisser tout seul dans le noir");

var word = "?";
var game = "Fortnite";
function isUpperCase(answer) {
    return answer === answer.toUpperCase();
}


if (answer.includes(word)){
    console.log("Ouais ouais c'est ça");
}

else if (answer.includes(game)) {
    console.log("on s' fait une partie soum-soum ?");
    
}

else if (answer === "") {
    console.log("tu es en PLS ?");
}

else if (isUpperCase(answer)) {
    console.log("Crie pas tu me saoules");
}

else if (answer === "exit"){
    break
}

else {
    console.log("Balek de ta vie")
}

}