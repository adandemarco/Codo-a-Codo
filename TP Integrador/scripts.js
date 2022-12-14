// const selectElement = document.querySelector('.descuentazos');

// selectElement.addEventListener('change', (event) => {
//   const result = document.querySelector('.result');
//   console.log(result);
// });

function descuentazos(){
    let opcion = document.getElementById("selector_descuentos").value;
    let cantidad = document.getElementById("inputCantidad").value;
    let total;
    let total_entradas;

    comprobar_campos();

    if (opcion == 1){
        total_entradas = calcular_cantidad(cantidad);
        total = calcular_porcentaje(80, total_entradas);
        document.getElementById("total_precio").innerHTML = total;
    }
    else if (opcion == 2){
        total_entradas = calcular_cantidad(cantidad);
        total = calcular_porcentaje(50, total_entradas);
        document.getElementById("total_precio").innerHTML = total;
    }
    else if (opcion == 3){
        total_entradas = calcular_cantidad(cantidad);
        total = calcular_porcentaje(15, total_entradas);
        document.getElementById("total_precio").innerHTML = total;
    }
    else{
        console.log("No hay descuento");
        total_entradas = calcular_cantidad(cantidad);
        total = calcular_porcentaje(0, total_entradas);
        document.getElementById("total_precio").innerHTML = total;
    }
}

function comprobar_campos(){
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let correo = document.getElementById("inputCorreo").value;
    let cantidad = document.getElementById("inputCantidad").value;
    // let errorMsj = '<i class="fa-solid fa-circle-info"></i>'
    console.log(nombre);

    document.getElementById('nombre_error').classList.remove('fa-solid', 'fa-circle-info');
    document.getElementById('apellido_error').classList.remove('fa-solid', 'fa-circle-info');
    document.getElementById('correo_error').classList.remove('fa-solid', 'fa-circle-info');
    document.getElementById('cantidad_error').classList.remove('fa-solid', 'fa-circle-info');

    if (nombre.length < 3 || nombre.length > 15){
        console.log("El nombre ingresado no es v??lido");
        document.getElementById('nombre_error').classList.add('fa-solid', 'fa-circle-info');

    }
    if (apellido.length < 3 || apellido.length > 15){
        console.log("El apellido ingresado no es v??lido");
        document.getElementById('apellido_error').classList.add('fa-solid', 'fa-circle-info');

    }
    if (correo.length < 10 || correo.length > 35){
        console.log("El apellido ingresado no es v??lido");
        document.getElementById('correo_error').classList.add('fa-solid', 'fa-circle-info');
    }
    if (cantidad < 1){
        console.log("La cantidad ingresada no es v??lido");
        document.getElementById('inputCantidad').value="La cantidad de entradas debe ser al menos una.";
        document.getElementById('cantidad_error').classList.add('fa-solid', 'fa-circle-info');
    }
}

function calcular_cantidad(cantidad){
    cantidad = cantidad * 200;
    return cantidad
}
function calcular_porcentaje(porc_descuento, total_entradas){
    let total = (porc_descuento * total_entradas) / 100;
    let precio_final = total_entradas - total;
    return precio_final;
}

function limpiar(){
    // document.getElementById("inputNombre").innerHTML = ""; 
    // document.getElementById("inputApellido").innerHTML = ""; 
    // document.getElementById("inputCorreo").innerHTML = ""; 
    // document.getElementById("inputCantidad").innerHTML = ""; 
    let formulario = document.getElementById("formulario");
    formulario.reset();
}