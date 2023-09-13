function execicio3 (){
    let idade = prompt ("qual é a usa idade?");

    if (idade >=  65) {
        alert ("você está na fila preferencial");
    } else {
        let pcd = prompt ("você é pcd? se sim digite 1, se nao digite 2");
        if (pcd == 1) {
            alert ("você está na fila preferencial")
        } else {
            let gestante = prompt ("você é gestante? se sim digite 1, se nao digite 2") ;
            if (gestante == 1) {
                alert ("você esta na fila preferencial")
            } else {
                alert ("você está na fila comum")
            }
        }
    }
}

execicio3();