// let edad = prompt("Ingrese su edad:");


// if (edad > 65){
//     document.write("Usted está jubilado");
// }




let numDia = prompt("Ingrese el número del día de la semana");

switch (numDia){
    case "1":
        document.write("Lunes");
        break;
    case "2":
        document.write("Martes");
        break;
    case "3":
        document.write("Miércoles");
        break;
    case "4":
        document.write("Jueves");
        break;
    case "5":
        document.write("Viernes");
        break;
    case "6":
        document.write("Sábado");
        break;   
    case "7":
        document.write("Domingo");
    break;      
    default:
        document.write("Opción Incorrecta");
}