function exercicio (){
    let numeroDigitado = prompt("digite um numero:");
    
    if(numeroDigitado == 0) {
    alert("0 é neutro")
    }   else if ( (numeroDigitado %2) == 0 ) {
        alert("numero é par");
    } else {
        alert("o numero é impar");
    }

}
exercicio()