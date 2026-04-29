function crearTabla() {

    // Obtenemos la cantidad de valores que dió el usuario
    let cantidad = document.getElementById("cantidad").value;

    // Obtenemos el div donde se va a mostrar la tabla
    let contenedor = document.getElementById("tabla");

    // Varibale donde construiremos el HTML de la tabla
    let html = "<table border='1'><tr>";

    // Bucle para crear las celdas según la cantidad
    for (let i = 0; i < cantidad; i++) {

        // Generamos un número aleatorio entre 0 y 99
        let numero = Math.floor(Math.random() * 100);

        // Agregamos una celda que contenga el número geneardo
        html += "<td>" + numero + "</td>";
    }

    // Cerramos la fila y la tabla
    html += "</tr></table>";

    // Insertamos la tabla detro del div
    contenedor.innerHTML = html;
}


function sumar() {

    // Seleccionamos todas las celdas de la tabla (td)
    let celdas = document.querySelectorAll("td");

    // Variable para acumular la suma
    let suma = 0;

    // Recorremos todas la celdas
    for (let i = 0; i < celdas.length; i++) {

        // Obtenemos el contenido de cada celda (texto)
        // y lo convertimos a número
        suma += parseInt(celdas[i].textContent);
    }

    // Mostramos el resultado en la pantalla
    document.getElementById("resultado").textContent = "Suma: " + suma;
}