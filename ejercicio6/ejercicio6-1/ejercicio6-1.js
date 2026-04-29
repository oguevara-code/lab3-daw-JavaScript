// Escogemos como un tamaño "inicial"
let tamaño = 20;

function aumentar() {
    tamaño += 1;
    document.getElementById("texto").style.fontSize = tamaño + "px";
}

function disminuir() {
    tamaño -= 1;
    document.getElementById("texto").style.fontSize = tamaño + "px";
}

function cambiarColor() {
    let colores = ["red", "blue", "green", "purple"];

    // Elegimos un color al azar
    let random = Math.floor(Math.random() * colores.length);
    document.getElementById("texto").style.color = colores[random];
}