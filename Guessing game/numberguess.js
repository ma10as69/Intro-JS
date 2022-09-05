
var number = Math.floor(Math.random() * 100) + 1;


    var knapp = document.querySelector("#knappID");
    var input = document.querySelector("#inputID");

    function sjekkTall(){
    console.log(input.value)

    if (knapp === number) {
        console.log("Riktig!");
    }
    if (knapp !== number) {
        console.log("Feil!");
    }
       }
    if (knapp === number) {
        console.log("Riktig!");
    } else {
    console.log("Feil!");
    }
    
    


    knapp.addEventListener("click", sjekkTall);
                                              