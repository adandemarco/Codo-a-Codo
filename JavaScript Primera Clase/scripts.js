// var nombrePersona = "Adán";
// let edad = 22;
// prompt("edad");
// document.writeln("Hola " + nombrePersona + " tenés " + edad + " años");


// let caca = edad + nombrePersona;
// console.log(caca);

// var nombre;



$('#botonSaludar').click(function(){
    console.log("a");
    let nombre = $("#nombreGente").val();

    alert("Hola" + nombre);
})

// function saludar(){
//     nombre = document.getElementById("nombre")
//     alert("Hola" + nombre);
// }


// function saludar() {

//     let nombreGente;

//     nombreGente = document.getElementById("nombreGente").value;
//     console.log(nombreGente);
//     document.getElementById("saludo").innerHTML = "Hola " + nombreGente;
//     document.getElementById("botonSaludar").style.display = "none";
// }