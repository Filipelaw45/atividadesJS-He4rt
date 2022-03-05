function calcularSalarioLiquido(horas, valor){
    let salario = (horas * valor) * 0.7 ;
    let total = salario.toFixed(2);
    return `Seu salario é de ${total},00 Reais!` ;
}

console.log(calcularSalarioLiquido(180, 60));