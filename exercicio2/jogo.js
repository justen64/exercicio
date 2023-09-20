
    alert("Bem vindo ao jogo da adivinhação");

    var numeroSecretoDaDuda = 4;
    var chute;

    while (chute != numeroSecretoDaDuda){
    
    chute = prompt("Chute um número de 1 a 10");
    
    // Compara o chute com o numero
    if (chute == numeroSecretoDaDuda) {
        alert("Voce acertou!");
    } else {
        alert("Voce erroooou!");
    
        if (chute > numeroSecretoDaDuda){
            alert("O numero secreto é menor que " + chute);
        } else {
            alert(`O numero secreto é maior que ${chute}`); 
        
        }
    }
}