function obtenerDia(numero) {
    const dias = ["Dominego", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    return dias[numero];
}

let hoy = new Date();           // New Date va a obtener la fecha actual
let numeroDia = hoy.getDay();   // Da un número del 0 al 6


console.log(obtenerDia(numeroDia));     //Convierte el número a texto