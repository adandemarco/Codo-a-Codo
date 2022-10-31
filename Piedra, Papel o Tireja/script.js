

function Juego(){
    opcion_usuario = parseInt(document.getElementById("opcion_usuario").value, 10);
    opcion_maquina = parseInt(document.getElementById("opcion_maquina").value, 10);


    // if (opcion_usuario == 1){
    //     opcion_usuario = "Piedra"
    // }
    // else if (opcion_usuario == 2){
    //     opcion_usuario = "Papel"
    // }
    // else if (opcion_usuario == 3){
    //     opcion_usuario = "Tijera"
    // }
    // else{
    //     opcion_usuario = "El número ingresado no corresponde a Piedra, Papel o Tijera";
    // }
    // console.log(opcion_usuario);
    // console.log(opcion_maquina);
    switch(opcion_usuario){
        case 1:

            if (opcion_maquina == 1){
                console.log("Empate");
            }
            else if (opcion_maquina == 2){
                console.log("Gana la máquina");
            }
            else if (opcion_maquina == 3){
                console.log("Ganaste");
            }
            break;

        case 2:
            if (opcion_maquina == 2){
                console.log("Empate");
            }
            else if (opcion_maquina == 1){
                console.log("Ganaste");
            }
            else if (opcion_maquina == 3){
                console.log("Gana la máquina");
            }
            break;

        case 3:
            if (opcion_maquina == 3){
                console.log("Empate");
            }
            else if (opcion_maquina == 1){
                console.log("Gana la máquina");
            }
            else if (opcion_maquina == 2){
                console.log("Ganaste");
            }
            break;

        default:
            console.log("No entró pa");
            break;
    }

}