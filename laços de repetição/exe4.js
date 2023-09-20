function exe4 () {
    let login = "Rodrigo";
    let senha = "123"

    let tentativa = 3;

    let = loginDigitado;
    let = senhaDigitada
    do{
        loginDigitado = prompt ("Login: ");
        senhaDigitada = prompt ("Senha: ");

        if( (loginDigitado== login) && (senhaDigitada == senha) ){
            alert(`Seja bem vindo, ${login}`);
            tentativas =0
        } else if (tentativas>=1){
            alert("Login ou Senha inválida");
            tentativas--
            alert(`${tentativas} tentativa(s) restante(s)`)
        }   else {
            alert("Login ou Senha inválidos");
            tentativas--
            alert("Acesso bloqueado.");
        } 
    }while (tentativa>0)
}
exe4()