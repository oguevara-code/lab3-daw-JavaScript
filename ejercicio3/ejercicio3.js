let hoy = new Date();
let arequipa = new Date(2026, 7, 15);   //15 de agosto 2026

let diferencia = arequipa - hoy;

let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

document.getElementById("resultado").textContent =
    "Faltan " + dias + " días para Arequipa";