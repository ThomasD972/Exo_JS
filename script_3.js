
var lvl = prompt("Bienvenue dans la pyramide JS? Combien d'étage veux tu ?");


function Pyramid (lvl) {

for (var i = 1; i <= lvl; i++) {
    row = '';
    
for (var j = 1; j <= (lvl - i); j++) {
    row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
    row += '*';
    }
    
    console.log(row);
    }
}
console.log(Pyramid(lvl));