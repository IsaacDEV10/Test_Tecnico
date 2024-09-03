const fs = require('fs');


const faturamentoData = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

function calcularFaturamento(faturamentoData) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
    let diasAcimaDaMedia = 0;


    faturamentoData.forEach(dia => {
        if (dia.valor > 0) {
            if (dia.valor < menorValor) menorValor = dia.valor;
            if (dia.valor > maiorValor) maiorValor = dia.valor;
            somaFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

   
    const mediaMensal = somaFaturamento / diasComFaturamento;

    faturamentoData.forEach(dia => {
        if (dia.valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    });

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}


const resultados = calcularFaturamento(faturamentoData);

console.log(`Menor valor de faturamento: ${resultados.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${resultados.maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`);
