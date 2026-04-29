function invertirTexto() {
    
    // Acá se obtiene el texto del input
    let texto = document.getElementById("texto").value;

    // Esto va a invertir el texto
    let textoInvertido = texto.split("").reverse().join("");

    document.getElementById("resultado").textContent = textoInvertido;
}