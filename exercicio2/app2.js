function exercicio2 () {
    let numeroDigitado = prompt("digite um numero:") ;
    let segundonumero = prompt ("digite outro numero");

    if (numeroDigitado == segundonumero) {
        alert("seus numeros são iguais")
    }
    else if (numeroDigitado < segundonumero ) {
        alert("seu primeiro numero é menor que o segundo");
    } else { (numeroDigitado > segundonumero) 
        alert("seu primeiro numero é maior que o segundo");
    }

}
exercicio2 ()