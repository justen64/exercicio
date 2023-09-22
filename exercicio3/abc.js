function abc() {
    
    alert("Bem-vindo ao cinesenai");
    
    let ingressoFilme1;
    let ingressoFilme2;
    let ingressoFilme3;
    let valorIngresso = 20
    let escolha = 0;
    let listaDefilmes = ["Harry Potter" , "A voz do silencio" , "Gente grande"]
    let adm = false;
    let listaCadastro = [
        ['admin', 'adminsenha'],
        ['cadastro', 'cadastrosenha'],
        ['eu', 'senha']
    ];

    filme1 = [
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
    ]  
    filme2 = [
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
    ]  
    filme3 = [
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
    ]  
     function menuLogin(){
        while (escolha != 3) {
            escolha = parseInt(prompt("1-Cadastra-se\n2-Login\n3-Sair"));
            
            
            switch (escolha) {
                case 1:
                    let cadastro = prompt("Cria um usuário");
                    let cadastrosenha = prompt("Crie uma senha");
                    let senhaConfirmar = prompt("Confirme a senha");
                    
                    for (let i = 0; i < listaCadastro.length; i++) {
                        if (cadastro == listaCadastro[i][0]) {
                            alert("Você já está cadastrado");
                        }
                    }
                    if (cadastrosenha == senhaConfirmar)
                    alert
                    listaCadastro.push([cadastro, cadastrosenha])
                    alert("Bem-vindo ao cinesenai");
                    
                    break;
                    case 2:
                        let login = prompt("Digite seu usuário");
                        let senha = prompt("Digite sua senha");
                        let logado = false
                        for (let i = 0; i < listaCadastro.length; i++) {
                            if (login == listaCadastro[i][0] && senha == listaCadastro[i][1]) {
                                alert("Bem-vindo ao CineSenai");
                                if (login == "admin" && senha == "adminsenha"){
                                    alert("Login Administrativo!")
                                    adm = true
                                    logado = true
                                }
                                
                                break;
                                
                            }
                        }
                        if (!logado) {
                            alert("Login ou senha errado");
                    }
                   else if (logado && adm == false) {
                        listaFilmes();
                    } else if (logado && adm){
                        menuadm();
                    }
                    break;
                    case 3:
                        alert("Até breve")
                        default:
                            alert("Opção inválida")
                        }
                    }
    }                
    function listaFilmes() {
                    alert("Filmes disponiveis");
                    while (escolha != 4) {
                        escolha = parseInt(prompt("1-" + listaDefilmes[0]+ "\n2-"+listaDefilmes[1]+"\n3-"+listaDefilmes[2]));              
                        switch (escolha) {
                            case 1:
                                mapa(filme1); 
                                ingressoFilme1 = ingressoFilme1 + 1   
                                break;
                            case 2:
                                mapa(filme2);
                                ingressoFilme2 ++ 
                                break;          
                            case 3:             
                                mapa(filme3);
                                ingressoFilme3 ++
                                break;
                            }
                            tipo_ingresso = prompt("Meia ou Inteira")
                            tipo_ingresso = tipo_ingresso.toLowerCase()
                            if(tipo_ingresso == 'meia'){
                                alert( `Você paga metade, R$${valorIngresso/2}`)
                            } else {
                                alert(`Preço integral R$ ${valorIngresso}`)
                            }
                            
                            
                            
                        }
    }
    function mapa(lista_assentos){
        resposta = (`   [===  TELA  ===]\n`)
        
        for (i=0 ;i<5;i++){
            resposta += i + "- "
            for (j=0 ;j<5;j++){
                let fileira = lista_assentos[i]
                if(fileira[j] == true) {
                    resposta += "[  ] ";
                } else {
                    resposta += "[X] ";
                }
                //else
                // resposta += "[ X ] ";
            }
            resposta += "\n";
        }
        resposta += "     0    1   2   3   4";
        let fileira = prompt("Escolha uma fileira\n\n" + resposta);
        let coluna = prompt("Escolha uma coluna\n\n" + resposta);
    
        lista_assentos[fileira][coluna] = false;
        resposta = ""
        for (i=0 ;i<5;i++){
            resposta += i + "- "
            for (j=0 ;j<5;j++){
                let fileira = lista_assentos[i]
                if(fileira[j] == true) {
                    resposta += "[  ] ";
                } else {
                    resposta += "[X] ";
                }
            }
            resposta += "\n";
        }
        alert(resposta)
    }
    function menuadm(){
        let faturamento = parseInt (prompt = ("1-Quais filmes faturaram mais?\n2- Qual faturamento total?\n3- Sair"));
        switch (faturamento){
            case 1:
                alert ("1-" + listaDefilmes[0]+"R$" + ingressoFilme1*valorIngresso + "\n2-" + listaDefilmes[1] +
                "R$" +ingressoFilme2*valorIngresso + "\n3-" + listaDefilmes[2] + "R$" + ingressoFilme3*valorIngresso)
                break;
            case 2:
                let total = (ingressoFilme1 + ingressoFilme2 + ingressoFilme3)*valorIngresso
                alert (total)
                break;
            default: 
                alert ("Opção Inválida")
                break;

        } 
        

    }
    menuLogin();
    
    }
abc();