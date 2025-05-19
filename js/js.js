function evaluateExercise(exerciseNumber, part) {
    let result = '';
    const resultDivId = `result${exerciseNumber}${part}`;
    const resultDiv = document.getElementById(resultDivId);

    switch (exerciseNumber) {
        case 6:
            const z6 = parseFloat(document.getElementById(`z6${part === 'b' ? 'b' : ''}`).value);
            if (part === 'a') {
                result = 0.4 * Math.pow(z6, 2) + 3.1 * Math.pow(z6, 2) - 162.3 * z6 - 80.7;
            } else {
                result = (Math.pow(z6, 3) - 23) / Math.cbrt(Math.pow(z6, 2) + 17.5);
            }
            break;
        case 7:
            const t7 = parseFloat(document.getElementById(`t7${part === 'b' ? 'b' : ''}`).value);
            if (part === 'a') {
                result = 0.5 * Math.exp(2 * t7) - 3.8 * Math.pow(t7, 3);
            } else {
                result = (6 * Math.pow(t7, 2) + 6 * t7 - 2) / (Math.pow(t7, 2) - 1);
            }
            break;
        case 8:
            const x8 = parseFloat(document.getElementById(`x8${part === 'b' ? 'b' : ''}`).value);
            const y8 = parseFloat(document.getElementById(`y8${part === 'b' ? 'b' : ''}`).value);
            if (part === 'a') {
                result = Math.pow(Math.pow(x8, 2) + Math.pow(y8, 2), 2 / 3) + (x8 * y8) / (y8 - x8);
            } else {
                result = Math.sqrt(x8 + y8) / Math.pow(x8 - y8, 2) + 2 * Math.pow(x8, 2) - x8 * Math.pow(y8, 2);
            }
            break;
        case 9:
            const c9 = 4.6;
            const d9 = 1.7;
            const a9 = c9 * Math.pow(d9, 2);
            const b9 = (c9 + a9) / (c9 - d9);
            if (part === 'a') {
                result = Math.exp(d9 - b9) + Math.cbrt(c9 + a9) - Math.pow(c9 * a9, d9);
            } else {
                result = d9 / c9 + Math.pow(c9 * d9 / b9, 2) - Math.pow(c9, d9) - a9 / b9;
            }
            break;
        case 10:
            const x10 = Math.PI / 10;
            if (part === 'a') {
                const leftSide = Math.pow(Math.cos(x10), 2) - Math.pow(Math.sin(x10), 2);
                const rightSide = 1 - 2 * Math.pow(Math.sin(x10), 2);
                result = `Izquierda: ${leftSide.toFixed(3)}, Derecha: ${rightSide.toFixed(3)}, ¿Son iguales? ${Math.abs(leftSide - rightSide) < 0.001}`;
            } else {
                const leftSide = Math.tan(x10) / (Math.sin(x10) - 2 * Math.tan(x10));
                const rightSide = 1 / (Math.cos(x10) - 2);
                result = `Izquierda: ${leftSide.toFixed(3)}, Derecha: ${rightSide.toFixed(3)}, ¿Son iguales? ${Math.abs(leftSide - rightSide) < 0.001}`;
            }
            break;
    }
    resultDiv.innerText = `Resultado: ${typeof result === 'number' ? result.toFixed(3) : result}`;
}