function trabalhoteste2() {
    
    alert("Bem-vindo ao cinesenai");
    
    let escolha = 0;
    let listaCadastro = [
        ['admin', 'adminsenha'],
        ['cadastro', 'cadastrosenha'],
        ['eu', 'senha']
    ];
    let assentosDisponiveis = [
        [1],[2],[3],[4],[5],
        [6],[7],[8],[9],[10],
        [11],[12],[13],[14],[15],
        [16],[17],[18],[19],[20],
        [21],[22],[23],[24],[25]
    ]
    let listaFilme;
    
    function menuLogin(){
        while (escolha != 4) {
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
            }
    }
    }
    menuLogin();

}
    
function mapa(){
        resposta = (`   [===  TELA  ===]\n`)
        
        for (i=0 ;i<5;i++){
            resposta += i + "- "
            for (j=0 ;j<5;j++){
                let fileira = assentosSala[i]
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
    
        assentosSala[fileira][coluna] = false;
    
        //mapa();
    }
    function listaFilmes() {
        alert("Filmes disponiveis");
        while (escolha != 4) {
            escolha = parseInt(prompt("1-Harry Potter\n2-A voz do silencio\n3-ABC \n4-Sair"));
            
            
            switch (escolha) {
                case 1:
                    assentosSala = [
                        [true, true, true, true, true],
                        [true, true, true, true, true],
                        [true, true, true, true, true],
                        [true, true, true, true, true],
                        [true, true, true, true, true],
                    ]                   
                    mapa();                   
                    break;
                    case 2:
                        assentosSala = [
                        [true,true,true,true],
                        [true,true,true,true],
                        [true,true,true,true],
                        [true,true,true,true],
                        [true,true,true,true],
                    ]
                    mapa();
                    break;
                    case 3:                       
                        assentosSala = [
                            [true, true, true, true, true],
                            [true, true, true, true, true],
                            [true, true, true, true, true],
                            [true, true, true, true, true],
                            [true, true, true, true, true],
                        ]
                        
                        break;
                        mapa();
                    }
                }   
            }        
                 
           
        
trabalhoteste2();
        
        // 1- [ ] [ ] [ ] [ ] [ ]
        // 2- [ ] [ ] [ ] [ ] [ ]
            // 3- [ ] [ ] [ ] [ ] [ ]
            // 4- [ ] [ ] [ ] [ ] [ ]
            // 5- [ ] [ ] [ ] [ ] [ ]
            //     A   B   C   D  E