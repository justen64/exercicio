function exe1() {
alert("Lista de Compras");
let lista = [];
let opcao;
let lista_completa = "";

while (opcao != 3) {
    let opcao = parseInt(prompt ("- Menu -\n1- Incluir item\n2- Ver lista -\n3- Sair"));
    switch (opcao) {
     case 1 : 
     let item = prompt("Que Item deseja inserir?");
     lista.push(item);
     alert ("Item incluído");
        break;
     case 2 : 
        for(let i=0; i<lista.length; i++) {
            lista_completa += lista[i] + "\n";
        }
        alert (lista_completa)
        break;
        case 3: 
        alert("Sair");
        break;
        default :alert ("Insira uma opção valida")




    }
}    
}
exe1()    