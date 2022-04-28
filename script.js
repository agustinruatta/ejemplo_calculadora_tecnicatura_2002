document.getElementById('botonCalcular').addEventListener('click', (e) => {
    e.preventDefault();

    let numeroA = parseFloat(document.getElementById('numeroA').value);
    let numeroB = parseFloat(document.getElementById('numeroB').value);
    let operacion = document.getElementById('selectorOperacion').value;
    let resultado;
    let textoOperacion;

    switch (operacion) {
        case 'suma':
            resultado = numeroA + numeroB;
            textoOperacion = numeroA + ' + ' + numeroB;
            break;

        case 'resta':
            resultado = numeroA - numeroB;
            textoOperacion = numeroA + ' - ' + numeroB;
            break;

        case 'multiplicacion':
            resultado = numeroA * numeroB;
            textoOperacion = numeroA + ' * ' + numeroB;
            break;

        case 'division':
            resultado = numeroA / numeroB;
            textoOperacion = numeroA + ' division ' + numeroB;
            break;

        case 'potencia':
            resultado = Math.pow(numeroA, numeroB);
            textoOperacion = numeroA + ' ^ ' + numeroB;
            break;

        case 'raiz':
            resultado = Math.pow(numeroA, 1 / numeroB);
            textoOperacion = numeroA + ' // ' + numeroB;
            break;

        case 'modulo':
            resultado = numeroA % numeroB;
            textoOperacion = numeroA + ' % ' + numeroB;
            break;
    }

    let etiquetaP = document.createElement('p');
    etiquetaP.appendChild(document.createTextNode('El resultado es ' + resultado));

    document.getElementById('resultado').innerHTML = '';
    document.getElementById('resultado').appendChild(etiquetaP);

    let operacionHistorial = document.createElement('p');
    operacionHistorial.appendChild(document.createTextNode(textoOperacion));
    document.getElementById('historial').appendChild(operacionHistorial);
})