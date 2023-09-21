function abc() {
    
    alert("Bem-vindo ao cinesenai");
    
    let escolha = 0;
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
                    let cadastro = prompt("Qual seu email?");
                    let cadastrosenha = prompt("Crie uma senha");
                    
                    for (let i = 0; i < listaCadastro.length; i++) {
                        if (cadastro == listaCadastro[i][0]) {
                            alert("Você já está cadastrado");
                        }
                    }
                    listaCadastro.push([cadastro, cadastrosenha])
                    alert("Bem-vindo ao cinesenai");
                    
                    break;
                    case 2:
                        let login = prompt("Qual seu email?");
                        let senha = prompt("Crie uma senha");
                        let logado = false
                        for (let i = 0; i < listaCadastro.length; i++) {
                            if (login == listaCadastro[i][0] && senha == listaCadastro[i][1]) {
                                alert("Você entrou, para bens");
                                logado = true;
                                break;
                                
                            }
                        }
                        if (!logado) {
                            alert("Login ou senha errado");
                    }
                    if (logado) {
                        listaFilmes();
                    }
                    break;
                    case 3:
                        alert("Ate breve")
                        default:
                            alert("Opção inválida")
                        }
                    }
    }                
    function listaFilmes() {
                    alert("Filmes disponiveis");
                    while (escolha != 4) {
                        escolha = parseInt(prompt("1-Harry Potter\n2-A voz do silencio\n3-ABC"));              
                        switch (escolha) {
                            case 1:
                                mapa(filme1);    
                                break;
                            case 2:
                                mapa(filme2);
                                break;          
                            case 3:             
                                mapa(filme3);
                                break;
                            }
                            tipo_ingresso = prompt("Meia ou Inteira")
                            tipo_ingresso = tipo_ingresso.toLowerCase()
                            if(tipo_ingresso == 'meia'){
                                alert("Você paga metade, R$ 10,00")
                            } else {
                                alert("Preço integral R$ 20,00")
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
    //menuLogin();
    listaFilmes();
    }
abc();