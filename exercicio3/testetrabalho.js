function testetrabalho() {

    alert("Bem vindo ao CineSenai")

    let escolha = 0
    let listaCadastro = [
        ['admin', 'adminsenha', 2],
        ['cadastro', 'cadastrosenha', 3],
        ['eu', 'senha', 0]
    ]
    while (escolha != 4) {
        escolha = parseInt(prompt("1-Cadastre-se\n2-Login\n3-Filmes\n-4 Sair"));

        switch (escolha) {
            case 1:
                let cadastro = prompt("Digite o seu Usuário");
                let senha = prompt("Digite uma senha");
                let senhaConfirma = prompt("Digite a senha novamente")

                for (let i = 0; i < listaCadastro.length; i++) {
                    if (cadastro == listaCadastro[i][0]) {
                        alert("Esse usuário já existe");
                    }

                }
                if (senha == senhaConfirma) {
                    alert = ("Cadastro Concluído.")
                } else {
                    alert("Senhas incorretas")
                }


                let novoCadastro = [cadastro, senha];
                listaCadastro.push(novoCadastro);

                break;

            case 2:
                logado = login();
                if (logado) {
                    menuFilmes();
                }
                break;
        }

    }


}


function login() {
    let login = prompt("DIgite seu usuário")
    let loginSenha = prompt("Digite sua senha")
    let logado = false;

    for (let i = 0; i < listaCadastro.length; i++) {
        if (login == listaCadastro[i][0] && loginSenha == listaCadastro[i][1]) {
            alert("Bem vindo ao CineSenai");
            logado = true;
            return logado;
        }
    }
    if (!logado) {
        alert("Usuário ou senha incorredas");
        return logado;
    }
}


testetrabalho()