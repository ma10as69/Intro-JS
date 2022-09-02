
    var knapp = document.querySelector("knappID");
    var input = document.querySelector("inputID")

    function sjekkTall(){
    console.log(input.value)
    }


    knapp.addEventListener("click", sjekkTall);
    