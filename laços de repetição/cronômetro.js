// alert ("Cronômetro"); 

// let numeroadd = 60;
// var numeromax = 59;

// while ( numeroadd > numeromax ) {
//     numeroadd = prompt("Digite um número:");
//     if (numeroadd > numeromax) {
//         console.log("Não pode");
//     } else { 
//         for (let i = 0; i <= numeroadd; i++){
//             console.log(i);
//         }
//     }

// }

let numeroAdd;

do{
    numeroAdd = prompt("Digite um número: ")
    if (numeroAdd < 59) {

        for (let i = 0; i <= numeroAdd; i++){
            console.log(i)
        }

    } else {
        console.log("Não pode");
    }
    
} while (numeroAdd >= 60)