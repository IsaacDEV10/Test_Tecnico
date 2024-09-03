function numFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) return true;
        let next = a + b;
        a = b;
        b = next;
    }

    return false;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe um número: ', (input) => {
    const numero = parseInt(input);

    if (numFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }

    readline.close();
});
