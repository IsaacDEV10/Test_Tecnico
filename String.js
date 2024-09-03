function inverterString(str) {
    let stringInvertida = '';

    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe uma string: ', (input) => {
    const resultado = inverterString(input);
    console.log(`String invertida: ${resultado}`);
    readline.close();
});
