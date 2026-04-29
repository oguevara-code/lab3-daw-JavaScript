function obtenerCodigo() {
    let url = document.getElementById("url").value;

    // Obtener la última parte del  URL
    let partes = url.split("/");
    let codigo = partes[partes.length - 1];

    // Quitar los guiones
    let codigoFinal = codigo.replace(/-/g, "");

    document.getElementById("resultado").textContent = codigoFinal;
}