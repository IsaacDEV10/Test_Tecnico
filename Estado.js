function calcularPercentuais(faturamentoPorEstado) {
    const valorTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);


    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
        percentuais[estado] = ((faturamentoPorEstado[estado] / valorTotal) * 100).toFixed(2);
    }

    return { valorTotal, percentuais };
}


const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};


const resultados = calcularPercentuais(faturamentoPorEstado);


console.log(`Faturamento total: R$ ${resultados.valorTotal.toFixed(2)}`);
console.log("Percentual de faturamento por estado:");
for (const estado in resultados.percentuais) {
    console.log(`${estado}: ${resultados.percentuais[estado]}%`);
}
