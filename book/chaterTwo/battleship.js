var randomLoc = Math.floor(Math.random() *5);
var location1=randomLoc;
var location2=location1+1;
var location3=location2+1;
var guess=undefined;
var hits=0;
var guesses=0;
var isSunk=false;
var coord;

while (isSunk == false){
    guess = prompt("Ready, aim in fire! (enter number 0-6) :");
    if (guess<0 || guess>6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses = guesses +1;
        if (guess==location1 || guess ==location2 || guess==location3){
            alert("HIT!")
            hits=hits+1;
            if (hits==3) {
                alert("You sank my battleship");
                isSunk=true;
            }
        } else{
            alert("MISS");
        }
    }
}
    var status= "you took " + guesses + " guesses to sink the battleship, " + "witch means you shooting accuracy was " + (3/guesses);
    alert(status);




