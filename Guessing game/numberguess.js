var number = Math.floor(Math.random() * 100) + 1;
var guesses = 10
var playing = false;
var new_game = true;


var knapp = document.querySelector("#knappID");
var restart = document.querySelector("#restartID");
var input = document.querySelector("#inputID");
var output = document.getElementById("output");
console.log(number);


    function sjekkTall(){
        console.log(input.value)

        if (input.value == number) {
            console.log("Riktig!");
            output.innerHTML="You were able to guess the correct number with " + guesses + " attempts remaining!";
        }
        else if (input.value < number) {
            console.log("for lavt!");
            output.innerHTML="Too Low! You guessed the wrong number with " + guesses + " attempts remaining!";
        }
        else if (input.value > number) {
            console.log("for høyt!");
            output.innerHTML="Too high! You guessed the wrong number with " + guesses + " attempts remaining!";
        } else {
        console.log("error");
        }
    } // slutt sjekktall

    knapp.addEventListener("click", sjekkTall);


// restart
function restart(){
    guesses = 10;
    number = Math.floor(Math.random() * 100) + 1;
}
    knapp.addEventListener("press", restart);


// enter key
addEventListener('keyup', (event) => {
    if (event.key == 'Enter'){
        sjekkTall(); // funksjon som skal kjøres 
    }    
})
    
                                              