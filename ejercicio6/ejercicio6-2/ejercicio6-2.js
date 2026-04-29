function calcular() {
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    let op = document.getElementById("operador").value;

    let resultado;

    if (op == "+") resultado = a + b;
    else if (op == "-") resultado = a - b;
    else if (op == "*") resultado = a * b;
    else if (op == "/") resultado = a / b;
    else if (op == "&&") resultado = a && b;
    else if (op == "||") resultado = a || b;
    else if (op == "&") resultado = a & b;
    else if (op == "|") resultado = a | b;

    document.getElementById("resultado").textContent = "Resultado: " + resultado;    
}